import React, { Component } from 'react'
import { isNullOrUndefined } from 'util';
import LifecycleB from './LifecycleB';

export class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Asif'
        }
        console.log('LifecycleA constructor method')
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps method')
        return isNullOrUndefined
    }

    componentDidMount(){
        console.log('LifecycleA componentDidMount method')
    }

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate method')
        return true
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate method')
        return null
    }
    
    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate method')
    }

    stateChange = ()=>{
        this.setState({
            name: 'Rahul'
        })
    }
    render() {
        console.log('LifecycleA render method')
        return (
            <div>
                <div>LifecycleA</div>
                <button onClick={this.stateChange}>Change State</button>
                <LifecycleB></LifecycleB>
            </div>
        )
    }
    
}

export default LifecycleA
