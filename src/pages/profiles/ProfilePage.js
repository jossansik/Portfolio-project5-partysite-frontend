import React, { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import { fetchMoreData } from "../../utils/utils";
import { Link } from "react-router-dom";
import { Col, Row, Container, Button } from "react-bootstrap";
import Asset from "../../components/Asset";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "../posts/Post";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profilePosts, setProfilePosts] = useState({ results: [] });
  const [profileData, setProfileData] = useState({ results: [] });

  const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: profile }, { data: posts }] = await Promise.all([
          axiosReq.get(`api/profiles/${currentUser.profile_id}/`),
          axiosReq.get(`api/posts/?owner__profile=${currentUser.profile_id}`),
        ]);
        setProfileData(profile);
        setProfilePosts(posts);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [currentUser]);

  const mainProfile = (
    <>
      <Row className="px-3 text-center">
        <div>
          <Image roundedCircle src={profileData?.image} />
        </div>
        <div>
          <h3 className="m-2">{profileData?.owner}</h3>
          <Row className="justify-content-center no-gutters">
            <Col xs={3} className="my-2">
              <div>{profileData?.posts_count}</div>
              <div>posts</div>
            </Col>
          </Row>
        </div>
        {profileData?.is_owner && (
          <Link to={`/profiles/${profileData?.id}/edit`}>
            <Button className="btn btn-dark float-end">Edit profile</Button>
          </Link>
        )}
      </Row>
    </>
  );

  const mainProfilePosts = (
    <>
      <hr />
      <p className="text-center">Posts</p>
      <hr />
      {profilePosts.results.length ? (
        <InfiniteScroll
          className="row"
          children={profilePosts.results.map((post) => (
            <Post
              col="col-6"
              key={post.id}
              {...post}
              setPosts={setProfilePosts}
            />
          ))}
          dataLength={profilePosts.results.length}
          loader={<Asset spinner />}
          hasMore={!!profilePosts.next}
          next={() => fetchMoreData(profilePosts, setProfilePosts)}
        />
      ) : (
        <div className="text-center">
          No results found you have not posted anything yet.
        </div>
      )}
    </>
  );

  return (
    <Col className="m-auto py-2 p-0 p-lg-2" md={6}>
      <Container>
        {hasLoaded ? (
          <>
            {mainProfile}
            {mainProfilePosts}
          </>
        ) : (
          <Asset spinner />
        )}
      </Container>
    </Col>
  );
}

export default ProfilePage;
