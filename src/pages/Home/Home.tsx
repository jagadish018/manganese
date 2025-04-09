import Container from "../../components/container/Container";
import NavigationBar from "../../components/Navigation-bar/NavigationBar";
import Bears from "./components/bears/Bears";


import "./Home.css";

const Home = () => {
  return (
    <>
      <NavigationBar />
      <Container>
        <div className="home-root">
          <Bears />
          
          
        </div>
      </Container>
    </>
  );
};

export default Home;
