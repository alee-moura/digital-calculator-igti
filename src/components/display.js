import React, {Component} from 'react';

class Display extends Component {
    render() {
        <div className={"display borderBlack"}>
            {this.props.value}
        </div>
    }
}

export default Display;