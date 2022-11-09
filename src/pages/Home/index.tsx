import styled from "styled-components";
import { useSeedFeed } from "../../apollo/hooks/useSeeFeed";
import Photo from "../../component/photo";
import { Container } from "../../styles/styles";
const HomeDiv = styled.div`
  padding-top: 90px;
`;
const PhotosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const Home = () => {
  const { data } = useSeedFeed();
  return (
    <HomeDiv>
      <Container>
        <PhotosContainer>
          {data?.seeFeed?.map((photo) => (
            <Photo key={photo?.id} photo={photo!} user={photo?.user!} />
          ))}
        </PhotosContainer>
      </Container>
    </HomeDiv>
  );
};
export default Home;
