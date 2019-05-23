import React, { Component } from 'react'
import { isNullOrUndefined } from 'util';

export class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Asif'
        }
        console.log('LifecycleB constructor method')
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleB getDerivedStateFromProps method')
        return isNullOrUndefined
    }

    componentDidMount(){
        console.log('LifecycleB componentDidMount method')
    }

    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate method')
        return true
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleB getSnapshotBeforeUpdate method')
        return null
    }
    
    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate method')
    }

    render() {
        console.log('LifecycleB render method')
        return (
            <div>
                LifecycleB
            </div>
        )
    }
    
}

export default LifecycleB
