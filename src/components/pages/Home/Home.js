import styled from 'styled-components';
import { CaretDownFill } from '@styled-icons/bootstrap/CaretDownFill';
import { CaretUpFill } from '@styled-icons/bootstrap/CaretUpFill';
const HomeSection = styled.section`
  background-color: ${(props) => props.theme.mainbg};
  padding: 1em;
  height: 100%;
  line-height: 1.6;
`;

const HomeMain = styled.div`
  width: 800px;
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
  background-color: ${(props) => props.theme.body};
  list-style: none;
  border: 1px solid;
  border-color: ${(props) => props.theme.text};
  padding: 0.5rem;
  button {
    height: 30px;
    width: 30px;
    background: none;
    border: none;
    color: ${(props) => props.theme.text};
    cursor: pointer;

    &:hover {
      color: gray;
    }
  }
`;
function Home() {
  const postData = [
    {
      title: 'This is a Title',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo molestias non delectus, eaque, esse vitae vel exercitationem eius, aliquam obcaecati eligendi enim sapiente dolor animi.',
      votes: 50,
      user: 'Jam',
      comments: ['nice', 'wow', 'good post', 'updvoted'],
    },
    {
      title: 'This is a Title',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo molestias non delectus, eaque, esse vitae vel exercitationem eius, aliquam obcaecati eligendi enim sapiente dolor animi.',
      votes: -100,
      user: 'Maj',
      comments: ['nice', 'wow', 'good post', 'updvoted'],
    },
    {
      title: 'This is a Title',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo molestias non delectus, eaque, esse vitae vel exercitationem eius, aliquam obcaecati eligendi enim sapiente dolor animi.',
      votes: 1267,
      user: 'Alfred',
      comments: ['nice', 'wow', 'good post', 'updvoted'],
    },
    {
      title: 'This is a Title',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo molestias non delectus, eaque, esse vitae vel exercitationem eius, aliquam obcaecati eligendi enim sapiente dolor animi.',
      votes: 599,
      user: 'Recca',
      comments: ['nice', 'wow', 'good post', 'updvoted'],
    },
    {
      title: 'This is a Title',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo molestias non delectus, eaque, esse vitae vel exercitationem eius, aliquam obcaecati eligendi enim sapiente dolor animi.',
      votes: 0,
      user: 'Myers',
      comments: ['nice', 'wow', 'good post', 'updvoted'],
    },
  ];
  return (
    <HomeSection>
      <HomeMain>
        <div>
          <h2>Create Post:</h2>
          <input type="text" />
        </div>
        <PostContainer>
          {postData.map((post) => {
            return (
              <Post key={post.title + post.user}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <button>
                  <CaretUpFill />
                </button>
                <span> {post.votes} </span>
                <button>
                  <CaretDownFill />
                </button>
              </Post>
            );
          })}
        </PostContainer>
      </HomeMain>
    </HomeSection>
  );
}

export default Home;
