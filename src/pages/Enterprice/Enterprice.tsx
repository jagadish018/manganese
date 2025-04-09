import { useNavigate } from "react-router";
import "./Enterprice.css";
import NavigationBar from "../../components/Navigation-bar/NavigationBar";
import Container from "../../components/container/Container";

const Enterprice = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavigationBar />
      <Container>
        <div className="enterprice-root">
          <h1>Enterprice</h1>
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

export default Enterprice;
