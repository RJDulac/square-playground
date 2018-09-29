import React from 'react';
import PropTypes from 'prop-types';
import './Square.css';


// const getTitle = () => 'Function Title';

//all react components must have a render function
export default class Square extends React.Component {
    render() {
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
            backgroundColor: this.props.initialColor,
        };
        //return null for no render
        // return (null);
        return (
            <div>
                <div className="square" style={style}>
                    { this.props.showTitle && <strong>Title</strong> }
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