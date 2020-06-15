import React, { Component } from 'react';
import './Meme.css';
class Meme extends Component{
    constructor(props){
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
        // this.state = {captions: []}
    }

    handleRemove(){
        this.props.removeMeme(this.props.id);
    }
    

    render(){

        return (
            <div className="Meme">
                <div className="Meme-single">
                    <li>{this.props.caption}</li>
                    <img className="Meme-img" src= {this.props.image}/> 
                </div>
                <div>
                    <button onClick={this.handleRemove}>Delete</button>
                    </div>
            </div>
          );
    }
}

export default Meme;
