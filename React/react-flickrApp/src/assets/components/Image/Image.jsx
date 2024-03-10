import './Image.css';

function Image(props){

  const { imageURL, title } = props;


  return(
    <>
      <article className="imageCard">
        {/* <h3 className="imageTitle">{ title }</h3> */}
        <img src={ imageURL } alt="" />
      </article>
    </>
  );
}

export default Image;