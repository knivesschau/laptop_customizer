import React, {Component} from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import UserTotal from '../UserTotal/UserTotal';

class UserCart extends Component {
    render() {
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
          const featureHash = feature + '-' + idx;
          const selectedOption = this.props.selected[feature];

          return (
            <OrderSummary
                featureHash={featureHash}
                feature={feature}
                selectedOption={selectedOption.name}
                cost={selectedOption.cost}
                key={selectedOption.name}/>
          );

        });

        return (
            <section className="main__summary">
                
                <h2>Your cart</h2>
                {summary}

                <UserTotal 
                    selected={this.props.selected}/>
                    
            </section>
        );
    }
}

export default UserCart;