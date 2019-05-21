import React, { Component } from 'react'

export default class From extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments:'',
             topic: 'react'
        }
    }
    
    render() {
        return (
            <div>
                Form Component
                <form onSubmit={this.handleFormSubmit}>
                    <div>
                        <label>Username</label>
                        <input type='text' value={this.state.username} onChange={this.handleUsernameChange}></input>
                    </div>
                    <div>
                        <label>Comments</label>
                        <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
                    </div>
                    <div>
                        <label>Topics</label>
                        <select value= {this.state.topic} onChange={this.handleTopicChange}>
                            <option value='react'>React</option>
                            <option value='angular'>Angular</option>
                            <option value='vue'>Vue</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    handleFormSubmit = (event) =>{
        alert(`${this.state.username} ${this.state.comments}  ${this.state.topic}`)
        event.preventDefault()
        
    }
}
