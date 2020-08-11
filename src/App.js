import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfGuests: 2,
      subtotal: 0.0,
      tipPercent: 0.0,
      splitEvenly: true,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.name === 'splitEvenly' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  calculateGrandTotal = () => ((parseFloat(this.state.subtotal) + parseFloat(this.state.subtotal) * parseFloat(this.state.tipPercent) / 100) / parseFloat(this.state.numberOfGuests)).toFixed(2)

  render() {
    return (
      <form>
        <label>
          Number of guests:
          <input 
            min="1"
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <br />
        <label>
          Subtotal: $
          <input 
            min="0"
            name="subtotal"
            type="number"
            value={this.state.subtotal}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <br />
        <label>
          Tip Percent:
          <input 
            min="0"
            name="tipPercent"
            type="number"
            value={this.state.tipPercent}
            onChange={this.handleInputChange} />
        </label>
        %
        <br />
        <div>
          <br />
          Grand Total: $
          {this.calculateGrandTotal()} per person
      </div>
      </form>
    );
  }
}

export default App;