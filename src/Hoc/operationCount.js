import React from 'react';

const operationCount=(Comp)=>{
    class NewOperationCount extends React.Component{
       constructor(){ 
            super();
            this.state={
            count:0
            };
        this.operationCount=this.operationCount.bind(this);
        }
        operationCount(){
            //this.state.count=this.state.count+1;
            this.setState({
            count: this.state.count+1
            });
        }
        render(){
            return <Comp operationCount={this.operationCount} count={this.state.count}/>;
        }
    }
    return NewOperationCount;
}

export default operationCount;
//operactionCount(function(){})
//operationCount(ClickCount);
//operationCount(HoverCount);
//operationCount(100);
//operationCount('Hi All');