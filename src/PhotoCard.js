import React, { useState } from 'react';




function PhotoCard(props) {
    const [count, setCount] = useState(0)
    // const [dislikes, setDislikes] = useState(0)
    // useState sets the starter value,
    // coiunt is the variable to keep track of and use later
    // setCount is a function that can set a new state
    // React remembers when you call useState in the past so it 
    // doesnt reset the state, w/o useState, it would reset
    return (
        <div className="card-frame">
            <h2>{props.title}</h2>
            <img  src={props.url} alt={props.title}/>
            <p>{props.description}</p>
            <div className="buttons">
            <button onClick={
                (e)=>{
                    console.log('omg a click!')
                    setCount(count + 1);
                    console.log(count)
                }

            }>Like</button>
            <button onClick={
                (e)=>{
                    console.log("dislike????")
                    count === 0 ? setCount(count) : setCount(count -1)
                    // setDislikes(dislikes + 1)
                    // console.log(dislikes)
                }
            }>Dislike</button>
            </div>
            <p>Like total: {count}</p>
            
        </div>
    );
}

export default PhotoCard;