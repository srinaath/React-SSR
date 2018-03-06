import                         'babel-polyfill';
import express            from 'express';
import renderer           from './helpers/renderer';
import createStore        from './helpers/createStore';
import { matchRoutes }    from 'react-router-config';
import Routes             from './client/routes';

const app = express();

app.use(express.static('public'));

app.use('/', (req, res) => {
    const store = createStore(req);

    const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    });

    Promise.all(promises).then((result) => {
      const content = renderer(req, store);
      console.log('All promises resolved', result);
      res.send(content);
    });
    
  }
);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

