import { useAuth } from 'hooks';
import * as S from './Home.styled';

const Home = () => {
  const {
    user: { name },
    isLoggedIn,
  } = useAuth();

  return (
    <S.Section>
      <S.SectionTitle>Phonebook home page</S.SectionTitle>
      {isLoggedIn ? (
        <S.Title>Welcome, {name}!</S.Title>
      ) : (
        <S.Title>Welcome!</S.Title>
      )}
      <S.Text>
        This contact book will help you save the phone numbers of everyone you
        need
      </S.Text>
    </S.Section>
  );
};

export default Home;
