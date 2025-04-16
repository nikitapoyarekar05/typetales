import HomeContainer from "../containers/HomeContainer";

const Home = ({ posts, onSavePost }) => {
  return <HomeContainer posts={posts} onSavePost={onSavePost} />;
};

export default Home;
