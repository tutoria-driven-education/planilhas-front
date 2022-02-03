import Loader from "react-loader-spinner";
import styled from "styled-components";
import Navbar from "./Navbar";

export default function Loading() {
  return (
    <>
      <Navbar />
      <Container>
        <Loader
          type="TailSpin"
          color="var(--pink-color)"
          height={100}
          width={100}
        />
      </Container>
      ;
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
