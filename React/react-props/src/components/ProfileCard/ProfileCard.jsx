import './ProfileCard.css';


function ProfileCard(props){

  let {message} = props;
  message >= 5000 ? message = "Energy: it's over 5000" : message = "Energy: low"

  return(
    <>
      <p>{message}</p>
    </>
  );
}

export default ProfileCard;