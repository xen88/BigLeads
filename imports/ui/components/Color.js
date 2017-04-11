import React from 'react';
import { CirclePicker } from 'react-color';

class Color extends React.Component {
    constructor(props) {
        super();
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(color) {

        this.props.colorSchemeHandler(color);
    }
    render() {
        return <CirclePicker className = "mt4"
        onChange = {
            this.handleChange
        }
        />;
    }
}
export default Color;
