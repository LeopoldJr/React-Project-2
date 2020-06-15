import React, { Component } from 'react';
import Meme from "./Meme";
import MemeForm from "./NewMemeForm";
import "./MemeList.css";

class MemeList extends Component{
    constructor(props){
        super(props);
        this.state = {
            memes: []
            // {caption: "When you get 1000 warnings and 0 errors", image:"https://i1.wp.com/media.globalnews.ca/videostatic/297/599/successkid_thumb.jpg?w=1040&quality=70&strip=all"},
            // {caption: "It isn't mean if you add \"haha\" at the end", image: "https://www.highlandernews.org/wp-content/uploads/2016/02/ops.meme_.nba_-1024x768.jpg"}
        };
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
    }
    
    create(newMeme){
        this.setState({
            memes: [...this.state.memes, newMeme]
        })
    }
    remove(id){
        this.setState({
            memes: this.state.memes.filter(m => m.id !== id)
        })
    }

    render(){
        const memes = this.state.memes.map(meme => {
            return(
                <Meme 
                key={meme.id}
                id={meme.id}
                removeMeme={this.remove}
                caption={meme.caption}
                image={meme.image} />
            ) 
        })
        return (
            <div className="MemeList">
                <h1 className="MemeList-h1">Meme List</h1>
                <MemeForm createMeme={this.create} />
                <ul className="MemeList-memes"> {memes} </ul>
            </div>
          )
    }
}

export default MemeList;
