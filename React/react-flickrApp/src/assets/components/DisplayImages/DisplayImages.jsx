import './DisplayImages.css';
import { useState, useEffect } from "react";
import Image from "../Image/Image.jsx";

function DisplayImages(props){

  const { search } = props;

  const [images, setImages] = useState([]);

  const pictureSection = document.querySelector('.pictureSection');



  useEffect(() => {
    if(search.length > 0){
      pictureSection.style.visibility = 'visible';
      const img = search.map((obj) => {
        const imageURL = `https://live.staticflickr.com/${obj.server}/${obj.id}_${obj.secret}_w.jpg`
        return <Image key={obj.id} title={obj.title} imageURL={ imageURL } />
      });
      setImages(img)
    } else {
      setImages([]);
      pictureSection.style.visibility = 'hidden';
    }
  }, [search]);
  
  return(
    <>
      <section className="pictureSection">{ images }</section>
    </>
  );
}

export default DisplayImages;