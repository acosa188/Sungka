import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeBase from './components/HomeBase';
import SmallHole from './components/SmallHole';
import { movePebbles as blueMovePebbles } from './store/blueState';
import { movePebbles as gameMovePebbles } from './store/gameState';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blueScore: {
        team: "blue",
        score: this.props.game.holes[7],
        first_base: {
          position: 7,
          pebbles: this.props.game.holes[6]
        },
        second_base: {
          position: 6,
          pebbles: this.props.game.holes[5]
        },
        third_base: {
          position: 5,
          pebbles: this.props.game.holes[4]
        },
        fourth_base: {
          position: 4,
          pebbles: this.props.game.holes[3]
        },
        fifth_base: {
          position: 3,
          pebbles: this.props.game.holes[2]
        },
        sixth_base: {
          position: 2,
          pebbles: this.props.game.holes[1]
        },
        seventh_base: {
          position: 1,
          pebbles: this.props.game.holes[0]
        }
      },
      redScore: {
        team: "red",
        score: this.props.game.holes[15],
        first_base: {
          position: 1,
          pebbles: this.props.game.holes[8]
        },
        second_base: {
          position: 2,
          pebbles: this.props.game.holes[9]
        },
        third_base: {
          position: 3,
          pebbles: this.props.game.holes[10]
        },
        fourth_base: {
          position: 4,
          pebbles: this.props.game.holes[11]
        },
        fifth_base: {
          position: 5,
          pebbles: this.props.game.holes[12]
        },
        sixth_base: {
          position: 6,
          pebbles: this.props.game.holes[13]
        },
        seventh_base: {
          position: 7,
          pebbles: this.props.game.holes[14]
        }
      }
    }
  }

  componentDidUpdate(prevProps){

    // update blue score
    if(this.props.game.holes[7] !== this.state.blueScore.score){
      this.setState(prevState => ({
        ...prevState,
        blueScore:{
          ...prevState.blueScore,
          score: this.props.game.holes[7]
        }
      }))
    }

    // update blue 1st hole
    if(this.props.game.holes[6] !== this.state.blueScore.first_base.pebbles){
      this.setState(prevState =>({
        ...prevState,
        blueScore:{
          ...prevState.blueScore,
          first_base:{
            ...prevState.blueScore.first_base,
            pebbles: this.props.game.holes[6]
          }
        }
      }))
    }

    // update blue 2nd hole
    if(this.props.game.holes[5] !== this.state.blueScore.second_base.pebbles){
      this.setState(prevState =>({
        ...prevState,
        blueScore:{
          ...prevState.blueScore,
          second_base:{
            ...prevState.blueScore.second_base,
            pebbles: this.props.game.holes[5]
          }
        }
      }))
    }

    // update blue 3rd hole
    if(this.props.game.holes[4] !== this.state.blueScore.third_base.pebbles){
      this.setState(prevState =>({
        ...prevState,
        blueScore:{
          ...prevState.blueScore,
          third_base:{
            ...prevState.blueScore.third_base,
            pebbles: this.props.game.holes[4]
          }
        }
      }))
    }

    // update blue 4th hole
    if(this.props.game.holes[3] !== this.state.blueScore.fourth_base.pebbles){
      this.setState(prevState =>({
        ...prevState,
        blueScore:{
          ...prevState.blueScore,
          fourth_base:{
            ...prevState.blueScore.fourth_base,
            pebbles: this.props.game.holes[3]
          }
        }
      }))
    }

    // update blue 5th hole
    if(this.props.game.holes[2] !== this.state.blueScore.fifth_base.pebbles){
      this.setState(prevState =>({
        ...prevState,
        blueScore:{
          ...prevState.blueScore,
          fifth_base:{
            ...prevState.blueScore.fifth_base,
            pebbles: this.props.game.holes[2]
          }
        }
      }))
    }

    // update blue 6th hole
    if(this.props.game.holes[1] !== this.state.blueScore.sixth_base.pebbles){
      this.setState(prevState =>({
        ...prevState,
        blueScore:{
          ...prevState.blueScore,
          sixth_base:{
            ...prevState.blueScore.sixth_base,
            pebbles: this.props.game.holes[1]
          }
        }
      }))
    }

    // update blue 7th hole
    if(this.props.game.holes[0] !== this.state.blueScore.seventh_base.pebbles){
      this.setState(prevState =>({
        ...prevState,
        blueScore:{
          ...prevState.blueScore,
          seventh_base:{
            ...prevState.blueScore.seventh_base,
            pebbles: this.props.game.holes[0]
          }
        }
      }))
    }


    // updating red
    // update red score
    if(this.props.game.holes[15] !== this.state.redScore.score){
      this.setState(prevState => ({
        ...prevState,
        redScore:{
          ...prevState.redScore,
          score: this.props.game.holes[15]
        }
      }))
    }

    // update red 1st hole
    if(this.props.game.holes[8] !== this.state.redScore.first_base.pebbles){
      this.setState(prevState =>({
        ...prevState,
        redScore:{
          ...prevState.redScore,
          first_base:{
            ...prevState.redScore.first_base,
            pebbles: this.props.game.holes[8]
          }
        }
      }))
    }

    // update red 2nd hole
    if(this.props.game.holes[9] !== this.state.redScore.second_base.pebbles){
      this.setState(prevState =>({
        ...prevState,
        redScore:{
          ...prevState.redScore,
          second_base:{
            ...prevState.redScore.second_base,
            pebbles: this.props.game.holes[9]
          }
        }
      }))
    }

    // update red 3rd hole
    if(this.props.game.holes[10] !== this.state.redScore.third_base.pebbles){
      this.setState(prevState =>({
        ...prevState,
        redScore:{
          ...prevState.redScore,
          third_base:{
            ...prevState.redScore.third_base,
            pebbles: this.props.game.holes[10]
          }
        }
      }))
    }

    // update red 4th hole
    if(this.props.game.holes[11] !== this.state.redScore.fourth_base.pebbles){
      this.setState(prevState =>({
        ...prevState,
        redScore:{
          ...prevState.redScore,
          fourth_base:{
            ...prevState.redScore.fourth_base,
            pebbles: this.props.game.holes[11]
          }
        }
      }))
    }

    // update red 5th hole
    if(this.props.game.holes[12] !== this.state.redScore.fifth_base.pebbles){
      this.setState(prevState =>({
        ...prevState,
        redScore:{
          ...prevState.redScore,
          fifth_base:{
            ...prevState.redScore.fifth_base,
            pebbles: this.props.game.holes[12]
          }
        }
      }))
    }

    // update red 6th hole
    if(this.props.game.holes[13] !== this.state.redScore.sixth_base.pebbles){
      this.setState(prevState =>({
        ...prevState,
        redScore:{
          ...prevState.redScore,
          sixth_base:{
            ...prevState.redScore.sixth_base,
            pebbles: this.props.game.holes[13]
          }
        }
      }))
    }

    // update red 7th hole
    if(this.props.game.holes[14] !== this.state.redScore.seventh_base.pebbles){
      this.setState(prevState =>({
        ...prevState,
        redScore:{
          ...prevState.redScore,
          seventh_base:{
            ...prevState.redScore.seventh_base,
            pebbles: this.props.game.holes[14]
          }
        }
      }))
    }
  }

  handleMovePebbles = (team, position) =>{  
    this.props.gameMovePebbles({team, position});  
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
                        <SmallHole {...this.state.blueScore.first_base} team="blue" handleMovePebbles={this.handleMovePebbles} />
                      </div>
                      <div className="col h-100 r-bg mx-1">
                        <SmallHole {...this.state.blueScore.second_base} team="blue" handleMovePebbles={this.handleMovePebbles} />
                      </div>
                      <div className="col h-100 r-bg mx-1">
                        <SmallHole {...this.state.blueScore.third_base} team="blue" handleMovePebbles={this.handleMovePebbles} />
                      </div>
                      <div className="col h-100 r-bg mx-1">
                        <SmallHole {...this.state.blueScore.fourth_base} team="blue" handleMovePebbles={this.handleMovePebbles} />
                      </div>
                      <div className="col h-100 r-bg mx-1">
                        <SmallHole {...this.state.blueScore.fifth_base} team="blue" handleMovePebbles={this.handleMovePebbles} />
                      </div>
                      <div className="col h-100 r-bg mx-1">
                        <SmallHole {...this.state.blueScore.sixth_base} team="blue" handleMovePebbles={this.handleMovePebbles} />
                      </div>
                      <div className="col h-100 r-bg mx-1">
                        <SmallHole {...this.state.blueScore.seventh_base} team="blue" handleMovePebbles={this.handleMovePebbles} />
                      </div>
                    </div>
                  </div>
                  <div className="g-bg flex-fill my-2" >
                    <div className="row px-2 h-100">
                      <div className="col h-100 r-bg mx-1">
                        <SmallHole {...this.state.redScore.first_base} team="red" handleMovePebbles={this.handleMovePebbles} />
                      </div>
                      <div className="col h-100 r-bg mx-1">
                        <SmallHole {...this.state.redScore.second_base} team="red" handleMovePebbles={this.handleMovePebbles} />
                      </div>
                      <div className="col h-100 r-bg mx-1">
                        <SmallHole {...this.state.redScore.third_base} team="red" handleMovePebbles={this.handleMovePebbles} />
                      </div>
                      <div className="col h-100 r-bg mx-1">
                        <SmallHole {...this.state.redScore.fourth_base} team="red" handleMovePebbles={this.handleMovePebbles} />
                      </div>
                      <div className="col h-100 r-bg mx-1">
                        <SmallHole {...this.state.redScore.fifth_base} team="red" handleMovePebbles={this.handleMovePebbles} />
                      </div>
                      <div className="col h-100 r-bg mx-1">
                        <SmallHole {...this.state.redScore.sixth_base} team="red" handleMovePebbles={this.handleMovePebbles} />
                      </div>
                      <div className="col h-100 r-bg mx-1">
                        <SmallHole {...this.state.redScore.seventh_base} team="red" handleMovePebbles={this.handleMovePebbles} />
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
    game: state.game
  }
}

const mapDispatchToProps = () => {
  return{
    gameMovePebbles
  }
}


export default connect(mapStateToProps, mapDispatchToProps())(App);
