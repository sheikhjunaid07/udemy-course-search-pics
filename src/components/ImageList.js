import React from "react";
import "./ImageList.css";
import ImageShow from "./ImageShow";

export default function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow image={image} />;
  });
  return <div className="image-list">{renderedImages}</div>;
}
