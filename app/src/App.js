import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeBase from './components/HomeBase';
import SmallHole from './components/SmallHole';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blueScore: {
        team: "blue",
        score: this.props.blueScore,
        first_base: {
          pebbles: this.props.blueFirstBase
        },
        second_base: {
          pebbles: this.props.blueSecondBase
        },
        third_base: {
          pebbles: this.props.blueThirdBase
        },
        fourth_base: {
          pebbles: this.props.blueFourthBase
        },
        fifth_base: {
          pebbles: this.props.blueFifthBase
        },
        sixth_base: {
          pebbles: this.props.blueSixthBase
        },
        seventh_base: {
          pebbles: this.props.blueSeventhBase
        }
      },
      redScore: {
        team: "red",
        score: this.props.redScore,
        first_base: {
          pebbles: this.props.redFirstBase
        },
        second_base: {
          pebbles: this.props.redSecondBase
        },
        third_base: {
          pebbles: this.props.redThirdBase
        },
        fourth_base: {
          pebbles: this.props.redFourthBase
        },
        fifth_base: {
          pebbles: this.props.redFifthBase
        },
        sixth_base: {
          pebbles: this.props.redSixthBase
        },
        seventh_base: {
          pebbles: this.props.redSeventhBase
        }
      }
    }
  }

  render() {
    return (
      <div className="App">
        <main className="container mt-5">

          <div className="d-block d-md-none">
            <h1 className="display-3">Please switch to landscape mode</h1>
          </div>

          <div className="d-none d-md-block">
            <div className="row">
              <div className="col b-bg">
                <HomeBase {...this.state.blueScore} />
              </div>

              <div className="col-8 p-bg">

                <div className="d-flex flex-column h-100">
                  <div className="g-bg flex-fill my-2">
                    <div className="row px-2 h-100">
                      <div className="col h-100 r-bg mx-1">
                        <SmallHole {...this.state.blueScore.first_base} team="blue" />
                      </div>
                      <div className="col h-100 r-bg mx-1">
                        <SmallHole {...this.state.blueScore.second_base} team="blue" />
                      </div>
                      <div className="col h-100 r-bg mx-1">
                        <SmallHole {...this.state.blueScore.third_base} team="blue" />
                      </div>
                      <div className="col h-100 r-bg mx-1">
                        <SmallHole {...this.state.blueScore.fourth_base} team="blue" />
                      </div>
                      <div className="col h-100 r-bg mx-1">
                        <SmallHole {...this.state.blueScore.fifth_base} team="blue" />
                      </div>
                      <div className="col h-100 r-bg mx-1">
                        <SmallHole {...this.state.blueScore.sixth_base} team="blue" />
                      </div>
                      <div className="col h-100 r-bg mx-1">
                        <SmallHole {...this.state.blueScore.seventh_base} team="blue" />
                      </div>
                    </div>
                  </div>
                  <div className="g-bg flex-fill my-2" >
                    <div className="row px-2 h-100">
                      <div className="col h-100 r-bg mx-1">
                        <SmallHole {...this.state.redScore.first_base} team="red" />
                      </div>
                      <div className="col h-100 r-bg mx-1">
                        <SmallHole {...this.state.redScore.second_base} team="red" />
                      </div>
                      <div className="col h-100 r-bg mx-1">
                        <SmallHole {...this.state.redScore.third_base} team="red" />
                      </div>
                      <div className="col h-100 r-bg mx-1">
                        <SmallHole {...this.state.redScore.fourth_base} team="red" />
                      </div>
                      <div className="col h-100 r-bg mx-1">
                        <SmallHole {...this.state.redScore.fifth_base} team="red" />
                      </div>
                      <div className="col h-100 r-bg mx-1">
                        <SmallHole {...this.state.redScore.sixth_base} team="red" />
                      </div>
                      <div className="col h-100 r-bg mx-1">
                        <SmallHole {...this.state.redScore.seventh_base} team="red" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col b-bg">
                <HomeBase {...this.state.redScore} />
              </div>
            </div>
          </div>

        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    game: state.game,
    blueScore: state.blue.score,
    redScore: state.red.score,
    blueFirstBase: state.blue.first_hole,
    blueSecondBase: state.blue.second_hole,
    blueThirdBase: state.blue.third_hole,
    blueFourthBase: state.blue.fourth_hole,
    blueFifthBase: state.blue.fifth_hole,
    blueSixthBase: state.blue.sixth_hole,
    blueSeventhBase: state.blue.seventh_hole,
    redFirstBase: state.red.first_hole,
    redSecondBase: state.red.second_hole,
    redThirdBase: state.red.third_hole,
    redFourthBase: state.red.fourth_hole,
    redFifthBase: state.red.fifth_hole,
    redSixthBase: state.red.sixth_hole,
    redSeventhBase: state.red.seventh_hole
  }
}


export default connect(mapStateToProps)(App);
