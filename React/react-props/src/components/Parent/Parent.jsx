import ProfileCard from "../ProfileCard/ProfileCard";



function Parent(props){

  return(
    <>
      <ProfileCard message={props.message}/>
    </>
  );
}

export default Parent;