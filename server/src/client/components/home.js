import React from 'react';

const Home = () => {
  return (
    <div>
      <div> I'm Sri's first SSR home component</div>
      <button onClick = {() => { console.log('Hi there');}}> Press me </button>
    </div>
  )
}

export default Home;