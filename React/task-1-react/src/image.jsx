import adaPicture from './assets/Ada_Lovelace_portrait.jpg';

function ImageAda(){
  return(
    <figure className='adaImage'>
      <img src={adaPicture} alt="" />
    </figure>
  );
}

export default ImageAda;