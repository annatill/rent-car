import { Link } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Container, Title, Text, Button, Icon } from './HomePage.styled';

export const HomePage = () => {
  return (
    <>
      <Header />
      <Container>
        <Title>Car rental in Montenegro</Title>
        <Text>Total 1481 cars with an average cost of 48€ per day</Text>
        <Link to="/catalog" style={{ textDecoration: 'none' }}>
          <Button type="button">
            Find a car <Icon />
          </Button>
        </Link>
      </Container>
    </>
  );
};
