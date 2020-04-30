import React from 'react';
import List from './List';
import List2 from './List2';

function App() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 text-center">
          <h1>
            React Hooks Infinite Scroller
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-6 justify-content-center my-5">
          <List />
        </div>
        <div className="col-6 justify-content-center my-5">
          <List2 />
        </div>
      </div>
    </div>
  );
}

export default App;
