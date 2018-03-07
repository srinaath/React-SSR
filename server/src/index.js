import                         'babel-polyfill';
import express            from 'express';
import renderer           from './helpers/renderer';
import createStore        from './helpers/createStore';
import { matchRoutes }    from 'react-router-config';
import Routes             from './client/routes';
import proxy              from 'express-http-proxy';

const app = express();

app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000';
      return opts;
    }
  })
);

app.use(express.static('public'));

app.use('/', (req, res) => {
    const store = createStore(req);

    const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

    Promise.all(promises).then((result) => {
      const context = {};
      const content = renderer(req, store, context);
      
      if (context.notFound === true) {
        res.status(404);
      }
      
      res.send(content);
    });
    
  }
);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

