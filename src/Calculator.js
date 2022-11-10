import React from 'react';
import './calculator.css';

class Calculator extends React.Component {

    constructor() {
        super();
        this.state = {
            result: 0
        }
    }

    Add = () => {
        this.setState((prevState) => {
            return {
                result: prevState.result + 2
            }
        });
    }

    
    Square = () => {
        this.setState((prevState) => {
            return {
                result: prevState.result * prevState.result
            }
        });
    }

    
    Double = () => {
        this.setState((prevState) => {
            return {
                result: prevState.result * 2
            }
        });
    }

    
    Divide = () => {
        this.setState((prevState) => {
            return {
                result: prevState.result / 2
            }
        });
    }

    
    Subtract = () => {
        this.setState((prevState) => {
            return {
                result: prevState.result - 2
            }
        });
    }

    Zero = () => {
        this.setState({
            result: 0
        });
    }

    render() {
        const { result } = this.state;
        return(
            <div className='Calculator'>
                <div className='display'>
                    {result}
                </div>

                <div className='buttons'>
                    <button onClick={this.Add}>Add 2!</button>
                    <button onClick={this.Square}>Square!</button>
                    <button onClick={this.Double}>Double!</button>
                    <button onClick={this.Divide}>Divideby2!</button>
                    <button onClick={this.Subtract}>Subtract2!</button>
                    <button onClick={this.Zero}>0</button>
                </div>
            </div>
        );
    }
}

export default Calculator;