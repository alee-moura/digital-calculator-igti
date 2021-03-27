import React, { Component } from "react";

export class Button extends Component {

    handleClick() {
        const {disable, onClick} = this.props

        if ((onClick) && (!disable))
        this.props.onClick();
    }

    render() {
        const cssButtonClass = this.props.disable ? "button disable" : "button";

        return (
        <div className={cssButtonClass} onClick={this.handleClick.bind(this)}>
            {this.props.display}
        </div>
        )
    }
}