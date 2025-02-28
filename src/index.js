import React from "react"
import ReactDOM from "react-dom/client"

import "./style.css"

import One from "./assets/images/image (1).jpg"
import Two from "./assets/images/image (2).jpg"
import Three from "./assets/images/image (3).jpg"
import Four from "./assets/images/image (4).jpg"
import Five from "./assets/images/image (5).jpg"
import Six from "./assets/images/image (6).jpg"
import Seven from "./assets/images/image (7).jpg"
import Eight from "./assets/images/image (8).jpg"

const root=ReactDOM.createRoot(document.getElementById("root"))

function Imagegallery({img,Name})
{
  return(
    <div className="imagecontainer">
      <div>
      <img src={img} alt={Name} />
      <h4>{Name}</h4>
      </div>
    </div>
  )
}

const imageList = [
  {
    img: One,
    Name: "Fog"
  },
  {
    img: Two,
    Name: "Tiger"
  },
  {
    img: Three,
    Name: "Polar Bear"
  },
  {
    img: Four,
    Name: "Cat"
  },
  {
    img: Five,
    Name: "Bangal Tiger"
  },
  {
    img: Six,
    Name: "Butterfly"
  },
  {
    img: Seven,
    Name: "Eastern Blue Bird"
  },
  {
    img: Eight,
    Name: "Golden Fish"
  },
]

root.render(
  <div className="imagegallery-wrapper">
    {
      imageList.map((image,index)=>(
        <Imagegallery img={image.img} Name={image.Name}>

        </Imagegallery>
      ))
    }
  </div>
)
