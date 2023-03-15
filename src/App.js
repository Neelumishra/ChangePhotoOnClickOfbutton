import React from "react";
import "./style.css";
import Image from "./Image.jsx";

export default function App() {
  const [image,setimage] =React.useState("https://www.stockvault.net/data/2011/05/31/124348/thumb16.jpg")
  
  
   let arr =[  
     "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__480.jpg",

      "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
      
    
     "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",

     "https://media.istockphoto.com/photos/child-hugging-tree-with-heart-shape-on-it-picture-id1226721220?b=1&k=20&m=1226721220&s=612x612&w=0&h=v7YQrJLCx0z7CskP1_2sE98qgAnpu5xv_HPWBSyl0Sk=",

     "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg"
     
    ]

   function handleClick(){
    let i=Math.floor(Math.random()*5)
     setimage(arr[i])
    }

  return (
    <div style={{display:"flex"}}>
      <img src={image} width="200px" height="200px"></img>
       <button style={{marginLeft:"10px",height:"30px",marginTop:"80px"}} onClick={()=>handleClick()}>Change</button> 
    </div>
);

  }