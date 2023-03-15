import React from "react";

export default function Image(props){
  return(
    <div>
     <img className="image" src={props.Image} alt="No-image"
     width="200px" height="200px"></img>
    </div>
  )
}