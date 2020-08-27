import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="container mt-5">

        <div className="d-block d-md-none">
          <h1 className="display-3">Please switch to landscape mode</h1>
        </div>

        <div class="d-none d-md-block">
          <div className="row">
            <div className="col b-bg"></div>
  
            <div className="col-8 p-bg">
  
              <div className="d-flex flex-column h-100">
                <div className="g-bg flex-fill my-2">
                  <div className="row px-2 h-100">
                    <div className="col h-100 r-bg mx-1"></div>
                    <div className="col h-100 r-bg mx-1"></div>
                    <div className="col h-100 r-bg mx-1"></div>
                    <div className="col h-100 r-bg mx-1"></div>
                    <div className="col h-100 r-bg mx-1"></div>
                    <div className="col h-100 r-bg mx-1"></div>
                    <div className="col h-100 r-bg mx-1"></div>
                  </div>
                </div>
                <div className="g-bg flex-fill my-2" >
                <div className="row px-2 h-100">
                    <div className="col h-100 r-bg mx-1"></div>
                    <div className="col h-100 r-bg mx-1"></div>
                    <div className="col h-100 r-bg mx-1"></div>
                    <div className="col h-100 r-bg mx-1"></div>
                    <div className="col h-100 r-bg mx-1"></div>
                    <div className="col h-100 r-bg mx-1"></div>
                    <div className="col h-100 r-bg mx-1"></div>
                  </div>
                </div>
              </div>
  
            </div>
  
            <div className="col b-bg"></div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
