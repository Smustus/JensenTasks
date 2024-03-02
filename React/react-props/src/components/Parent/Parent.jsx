import ProfileCard from "../ProfileCard/ProfileCard";



function Parent(props){
  console.log(props);

  return(
    <>
      <ProfileCard message={props.message}/>
    </>
  );
}


/* export default {user, Parent}; */
export default Parent;