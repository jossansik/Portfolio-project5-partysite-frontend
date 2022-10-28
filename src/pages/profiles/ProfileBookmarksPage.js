import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMoreData } from "../../utils/utils";
import { Col, Container } from "react-bootstrap";
import Asset from "../../components/Asset";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "../posts/Post";

function ProfileBookmarksPage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profileBookmarkedPosts, setProfileBookmarkedPosts] = useState({ results: [] });
  const navigate = useNavigate();
  const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: profile }] = await Promise.all([
          axiosReq.get(`api/posts/?bookmarks__owner__profile=${currentUser.profile_id}`),
        ]);
        setProfileBookmarkedPosts(profile);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [currentUser]);

  const bookmarkUnmarked = () => {
    navigate(0);
  }

  return (
    <Col className="m-auto py-2 p-0 p-lg-2" md={6}>
      <Container>
        {hasLoaded ? (
          <>
          <hr />
          <p className="text-center">Posts</p>
          <hr />
          {profileBookmarkedPosts.results.length ? (
            <InfiniteScroll
              className="row"
              children={profileBookmarkedPosts.results.map((post) => (
                <Post
                  col="col-6"
                  key={post.id}
                  {...post}
                  bookmarkUnmarked={bookmarkUnmarked}
                />
              ))}
              dataLength={profileBookmarkedPosts.results.length}
              loader={<Asset spinner />}
              hasMore={!!profileBookmarkedPosts.next}
              next={() => fetchMoreData(profileBookmarkedPosts, setProfileBookmarkedPosts)}
            />
          ) : (
            <div className="text-center">
              No results found you have not posted anything yet.
            </div>
          )}
          </>
        ) : (
          <Asset spinner />
        )}
      </Container>
    </Col>
  );
}

export default ProfileBookmarksPage;
