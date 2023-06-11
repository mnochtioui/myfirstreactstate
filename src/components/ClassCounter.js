import React, { Component } from 'react'

class ClassCounter extends Component {

    constructor(props){
        super(props);

        this.state = {
            cpt : 0
        }
    }

    Increment = () => {
        this.setState({
            cpt : this.state.cpt + 1
        })
    }

  render() {
    return (
      <div>
        <button onClick={this.Increment} >Compteur {this.state.cpt} </button>
      </div>
    )
  }
}

export default ClassCounter