import React, { Component } from 'react';
import './NewMemeForm.css';
// const { uuid } = require('uuidv4');
import {v4 as uuid} from 'uuid'; 

class MemeForm extends Component{
    constructor(props){
        super(props);
        this.state = {caption: "", image: ""}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSubmit(evt){
        evt.preventDefault();
        this.props.createMeme({...this.state, id: uuid()});
        this.setState({ caption: "", image: "" })
    }
    
    render(){
        return (
            <div className="MemeForm">
                <form onSubmit={this.handleSubmit}>
                    <label className="MemeForm-label" htmlFor="caption">New Meme</label>
                    <input 
                    name='caption'
                    type="text" 
                    placeholder="Insert Caption Here..." 
                    id='caption' 
                    value={this.state.caption}
                    onChange={this.handleChange}
                    />
                    <input 
                    name='image'
                    type="text" 
                    placeholder="Insert Image Url Here..." 
                    id='image' 
                    value={this.state.image}
                    onChange={this.handleChange}
                    />
                    <div>
                        <button>Add Meme</button>
                    </div>
                </form>
                <div className="MemeForm-preview">
                    <p>{this.state.caption}</p>
                    <img className="MemeForm-preview-img" src= {this.state.image}/> 
                </div>
            </div>
            
          );
    }
}

export default MemeForm;
