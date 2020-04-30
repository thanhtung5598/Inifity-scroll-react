import React from 'react';
import List from './List';
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
        <div className="col-12 justify-content-center my-5">
          <List />
        </div>
      </div>
    </div>
  );
}

export default App;
