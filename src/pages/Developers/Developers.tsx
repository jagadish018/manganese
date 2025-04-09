import { useNavigate } from "react-router";
import "./Developers.css";
import NavigationBar from "../../components/Navigation-bar/NavigationBar";
import Container from "../../components/container/Container";

const Developers = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavigationBar />
      <Container>
        <div className="developers-root">
          <h1>Developers</h1>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Go back to home
          </button>
        </div>
      </Container>
    </>
  );
};

export default Developers;
