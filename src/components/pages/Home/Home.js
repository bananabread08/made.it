import styled from 'styled-components';

const HomeSection = styled.section`
  background-color: #dae0e5;
  padding: 1em;
  height: 100vh;
`;

const HomeMain = styled.div`
  width: 60%;
  margin: 0 auto;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const PostContainer = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Post = styled.li`
  background-color: #fff;
  list-style: none;
  border: 1px solid black;
`;
function Home() {
  return (
    <HomeSection>
      <HomeMain>
        <div>
          <h2>Create Post:</h2>
          <input type="text" />
        </div>
        <PostContainer>
          <Post>
            <h3>This is a Title</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
              modi nesciunt facere sequi magni nihil, corporis nemo illum quis,
              eum impedit. Expedita iusto vel laborum.
            </p>
            <button>^</button>
            <button>v</button>
          </Post>
          <Post>
            <h3>This is a Title</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
              modi nesciunt facere sequi magni nihil, corporis nemo illum quis,
              eum impedit. Expedita iusto vel laborum.
            </p>
            <button>^</button>
            <button>v</button>
          </Post>
          <Post>
            <h3>This is a Title</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
              modi nesciunt facere sequi magni nihil, corporis nemo illum quis,
              eum impedit. Expedita iusto vel laborum.
            </p>
            <button>^</button>
            <button>v</button>
          </Post>
          <Post>
            <h3>This is a Title</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
              modi nesciunt facere sequi magni nihil, corporis nemo illum quis,
              eum impedit. Expedita iusto vel laborum.
            </p>
            <button>^</button>
            <button>v</button>
          </Post>
        </PostContainer>
      </HomeMain>
    </HomeSection>
  );
}

export default Home;
