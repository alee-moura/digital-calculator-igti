import { Component } from "react";
import { Button } from "../components/button";
import Display from "../components/display"

class Calculator extends Component {
    initialState = {firstValue:0, secondValue:0}
    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    putValue = (value) => {
        const lastValue = this.state.firstValue;
        this.setState({firstValue:(lastValue*10)+value})
    }

    getValue = () => {
        return this.state.firstValue;
    }

    render() {
        return(
            <div className={"calculator"}>
                <div>
                    <Display value={this.getValue()}/>
                </div>
                <div className={"buttonsContainers"}>
                    <Button display={"1"} onClick={() => this.putValue(1)}/>
                    <Button display={"2"} onClick={() => this.putValue(2)}/>
                    <Button display={"3"} onClick={() => this.putValue(3)}/>
                    <Button display={"4"} onClick={() => this.putValue(4)}/>
                    <Button display={"5"} onClick={() => this.putValue(5)}/>
                    <Button display={"6"} onClick={() => this.putValue(6)}/>
                    <Button display={"7"} onClick={() => this.putValue(7)}/>
                    <Button display={"8"} onClick={() => this.putValue(8)}/>
                    <Button display={"9"} onClick={() => this.putValue(9)}/>
                    <Button display={"0"} onClick={() => this.putValue(0)}/>
                    <Button display={"+"} onClick={() => this.putValue()}/>
                    <Button display={"="} onClick={() => this.putValue()}/>
                    <Button display={"-"} onClick={() => this.putValue()}/>
                    <Button display={"C"} onClick={() => this.putValue()}/>
                </div>
            </div>
        )
    }
}

export default Calculator;