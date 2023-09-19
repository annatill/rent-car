import { useState } from 'react';
import { Header } from 'components/Header/Header';
import { Form } from 'components/Form/Form';
import { Catalog } from 'components/Catalog/Catalog';
import { Container } from './CatalogPage.styled';

export const CatalogPage = () => {
  const [filter, setFilter] = useState('');
  return (
    <>
      <Header />
      <Container>
        <Form filter={filter} setFilter={setFilter} />
        <Catalog filter={filter} />
      </Container>
    </>
  );
};
