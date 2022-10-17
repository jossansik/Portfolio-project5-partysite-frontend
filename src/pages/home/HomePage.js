import React from "react";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const HomePage = () => {
  const currentUser = useCurrentUser();

  const getUserInfo = async () => {
    console.log(currentUser)
    const { data } = await axiosReq.get("api/profiles/" + currentUser.profile_id + "/");
    console.log(data);
  }

  return (
    <div>
      <h2>PREPARE FOR FUN SCARES!</h2>
      <div><button onClick={getUserInfo}>Console.log user info</button></div>
    </div>
  )
}

export default HomePage
