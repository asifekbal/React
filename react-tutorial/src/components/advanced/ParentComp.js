import React, { Component } from 'react'
import PureComp from './PureComp';
import RegularComp from './RegularComp';
import MemoComp from './MemoComp';

export class ParentComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Asif'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Asif'
            })
        },2000)
    }
    
    render() {
        console.log('Parent Component Render')
        return (
            <div> Parent Component
                {/* <PureComp name={this.state.name}></PureComp>
                <RegularComp name={this.state.name}></RegularComp> */}
                <MemoComp name={this.state.name}></MemoComp>
            </div>
        )
    }
}

export default ParentComp
