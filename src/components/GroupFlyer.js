import GroupFlyer from "../groupFlyer.png";
import styled from "styled-components";

export default function Group() {
  const FlyerImage = styled.img`
    width: 100%;
  `;
  const Container = styled.div``;
  return (
    <Container>
      <p>Learn more</p>
      <FlyerImage src={GroupFlyer} alt="Group Flyer" />
    </Container>
  );
}
