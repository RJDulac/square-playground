import React from 'react';
import PropTypes from 'prop-types';
import './Square.css';

export default function SimpleSquare({ size, color }) {


    const sizePx = `${size}px`;
    const style = {
        width: sizePx,
        height: sizePx,
        //cannot mutate props, so you use state when you need to mutate
        backgroundColor: color,
    };
    return (

        <div className="square" style={style}>

        </div>
    );
}

SimpleSquare.propTypes = {
   color: PropTypes.string,
    size: PropTypes.number.isRequired,
};

SimpleSquare.defaultProps = {
    color: 'blue',
};