import React, { Component } from 'react'
import Feature from './Feature'

class Customizer extends Component {
  
  render(props) {
    return (
      <div className="App">
        <h2>Customize Your Laptop</h2>
        {Object.keys(this.props.features).map((feature, index) => 
        <Feature featureHash={feature + '-' + index} 
              selected={this.props.selected} 
              currency={this.props.currency} key={index} 
              featureName={feature} 
              features={this.props.features[feature]} 
              update={this.props.update}/>)}
      </div>
    );
  }
}

export default Customizer;