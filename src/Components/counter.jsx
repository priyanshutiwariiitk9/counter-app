import React, { Component } from "react";

class Counter extends Component {
    // state ={
    //     value: this.props.counter.value
    //     // tags: ['tag1','tag2','tag3']
    // };

    // styles ={
    //     fontSize:10,
    //     fontWeight:"bold"
    // }
    // handleIncrement = () => {
    //     // console.log('Increment' ,this);
    //     this.setState({ valfue: this.state.value+1});
    // }
       
    render() {
        
        return (
        // <React.Fragment>
        <div>
            {/* <span style={ this.styles } className="badge badge-primary m-2">{this.formatCount()}</span> */}
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            {/* <ul>{this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul> */}
        </div>
        // </React.Fragment>
        );
  }
  getBadgeClasses(){
    let classes="badge m-2 badge-";
    classes+=this.props.counter.value===0?"warning":"primary";
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value===0?"Zero":value;
  }
}

// const Counter = function(){
//     return (<div>
//         <h1>hello Wordl</h1>
//     </div>);
// };

export default Counter;
