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
        };

    }
    setCurrentColor (currentColor) {
        this.setState( {
            currentColor,
            foo: true,
        });
    }
    render() {
        console.log(this.state);
        let textInput;
        // const theTitle = <strong>Bold Title</strong>;
        const elements = [
            <p>a</p>,
            <p>b</p>,
            <p>c</p>
        ]
        const style = {
            width: '100px',
            height: '100px',
            //cannot mutate props, so you use state when you need to mutate
            backgroundColor: this.state.currentColor,
        };
        //return null for no render
        // return (null);
        return (
            <div>
                <div className="square" style={style}>
                    <div className="square-controls">
                        <input ref={(element) =>{ textInput = element;}}type="text" placeholder="Color..." />
                        <button onClick={() => { this.setCurrentColor(textInput.value) }}>Ok</button>
                    </div>

                </div>
            </div>

        );
    }
}
Square.propTypes = {
    initialColor: PropTypes.string.isRequired,
};

Square.defaultProps = {
    initialColor: 'black',
};