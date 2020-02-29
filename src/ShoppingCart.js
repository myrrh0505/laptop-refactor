import React, { Component } from 'react'
import ShoppingItems from './ShoppingItems'
class ShoppingCart extends Component {

  render() {
    const total = Object.keys(this.props.selected).reduce(
      (acc, curr) => acc + this.props.selected[curr].cost,
      0
    );

    return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {Object.keys(this.props.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = this.props.selected[feature];
        return (
          <ShoppingItems
            key={featureHash}
            selected={selectedOption}
            currency={this.props.currency}
            feature={feature}
          />
        )})}

      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {this.props.currency.format(total)}
        </div>
      </div>
    </section>
    );
  }
}

export default ShoppingCart;