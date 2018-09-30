import React from 'react';
import PropTypes from 'prop-types';
import './Square.css';


// const getTitle = () => 'Function Title';

//all react components must have a render function
export default class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentColor: this.props.initialColor,
            isHidden: this.props.initialIsHidden,
        };

    }
    setCurrentColor(currentColor) {
        this.setState({
            currentColor,
        });
    }
    toggleSquare() {
        this.setState((currentState) => {
            return {
                isHidden: !currentState.isHidden,
            };
        })
    }
    render() {
        console.log(this.state);
        let textInput;
        // const theTitle = <strong>Bold Title</strong>;
        // const elements = [
        //     <p>a</p>,
        //     <p>b</p>,
        //     <p>c</p>
        // ]
        const size = `${this.props.size}px`;
        const style = {
            width: size,
            height: size,
            //cannot mutate props, so you use state when you need to mutate
            backgroundColor: this.state.currentColor,
            display: this.state.isHidden ? 'none' : 'block',

        };
        //return null for no render
        // return (null);
        return (
            <div className="square-container">
                <div className="square" style={style}></div>
                <div className="square-controls">
                    <input ref={(element) => { textInput = element; }} type="text" placeholder="Color..." />
                    <button onClick={() => { this.setCurrentColor(textInput.value) }}>Ok</button>
                    <button onClick={() => this.toggleSquare()}>{this.state.isHidden ? 'Show' : 'Hide'}</button>
                </div>
                <div className="clear" />
            </div>

        );
    }
}
Square.propTypes = {
    initialColor: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    initialIsHidden: PropTypes.bool,
};

Square.defaultProps = {
    initialColor: 'black',
    InitialIsHidden: false,
};