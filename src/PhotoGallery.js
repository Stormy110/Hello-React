import React from "react";
import PhotoCard from "./PhotoCard";

const data = [
    {
        title: "Classroom Storytime",
        description: "Reading a story to my attentive kindergarten class, circa 2018.",
        url:"/pic5.png"
    },
    {
        title: "Monkey family on my shoulders in Bali",
        description: "While on vacation in Ubud, Bali, I met a hungry family of monkeys who enjoyed a rest and a snack atop my shoulder, Circa 2016",
        url:"/pic3.png"
    },
    {
        title: "Fall leaves in the face",
        description: "Some rapscallion throwing a large pile of leaves into my face, circa 2018.",
        url:"/pic2.png"
    },
    // {
    //     title: "Monkey eating banana on my shoulder",
    //     description: "A majestic monkey eating a yummy banana while a young gentlemen eagerly awaits his departure.",
    //     url:"/pic4.png"
    // },
    // {
    //     title: "Kindergarten graduation ceremony",
    //     description: "My kindergarten class of 2018-2019 graduated and had a fun little ceremony. No big deal.",
    //     url:"/pic1.png"
    // },
]

function PhotoGallery() {
  return (
    <div className="gallery">
      {
          data.map(p => {
          return <PhotoCard title={p.title} description={p.description} url={p.url}/>
          })
      }
    </div>
  );
}

export default PhotoGallery;
