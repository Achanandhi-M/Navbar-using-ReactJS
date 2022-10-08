import React,{Component} from "react";

export class CountClass extends Component {
    constructor() {
        super();
        this.state={
            count:0,
            name:"ACHU"
        };
    }

    clickable=() => {
        this.setState({
            count:this.state.count + 1,
            name: "Achanandhi"
        }, ()=> {
            console.log({"insideCallback":this.state.count});
        });
        console.log({"outside":this.state.count});
    };

    render() {
        return (
            <div style={{ textAlign:"center"}}>
                <div style={{ marginBottom:"20px" }}>class count {this.state.count}</div>
                <button onClick={this.clickable}>Increment</button>
                <p>{this.state.name}</p>
            </div>
        );
    }
}
export default CountClass;