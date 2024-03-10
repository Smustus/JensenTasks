import './Image.css';

function Image(props){

  const { imageURL, title } = props;

  function createModal() {
    const modal = document.createElement('dialog');
    modal.classList.add('modal');
    
    modal.addEventListener('click', () => {
      modal.close();
    });
  
    const modalContent = document.createElement('img');
    modalContent.src = imageURL;
    modalContent.classList.add('modalContent');
  
    modal.append(modalContent);
    document.body.append(modal);
    modal.showModal();
  }


  return(
    <>
      <article className="imageCard">
        <img src={ imageURL } alt="" onClick={ createModal }/>
      </article>
    </>
  );
}

export default Image;