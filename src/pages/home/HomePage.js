import React, { useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const HomePage = () => {
  const currentUser = useCurrentUser();
  const [owner, setOwner] = useState(null);

  const getUserInfo = async () => {
    const { data } = await axiosReq.get("api/profiles/" + currentUser.profile_id + "/");
    setOwner(data.owner);
  }

  return (
    <div>
      <h2>PREPARE FOR FUN SCARES!</h2>
      <div>
        <button onClick={getUserInfo}>Show owner</button>
      </div>
      {owner}
    </div>
  )
}

export default HomePage
