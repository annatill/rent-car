import { useState } from 'react';
import { useGetRentCarQuery } from '../../redux/rentCarApi';
import {
  Label,
  Forma,
  SelectBrand,
  SelectPrice,
  Button,
  ContainerButton,
} from './Form.styled';

export const Form = ({ filter, setFilter }) => {
  const { data } = useGetRentCarQuery();
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const makes = [...new Set(data?.map(item => item.make))];
  const priceRange = [
    ...new Set(
      data?.map(item => +item.rentalPrice.slice(1)).sort((a, b) => a - b)
    ),
  ];
  const handleSubmit = e => {
    e.preventDefault();
    const filter = {
      brand,
      price,
      from,
      to,
    };
    setFilter(filter);
  };

  const handleReset = () => {
    setBrand('');
    setPrice('');
    setFrom('');
    setTo('');
    setFilter('');
  };

  return (
    <Forma onSubmit={handleSubmit}>
      <Label>
        <span>Car brand</span>
        <SelectBrand name="cars" onChange={e => setBrand(e.target.value)}>
          <option value={''}>Choose a brand</option>
          {makes?.map(make => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </SelectBrand>
      </Label>

      <Label>
        <span>Price/ 1 hour</span>
        <SelectPrice name="price" onChange={e => setPrice(e.target.value)}>
          <option value={''}>To $</option>
          {priceRange?.map(price => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </SelectPrice>
      </Label>
      <Label>
        <span>Car mileage / km</span>
        <div>
          <input
            type="number"
            value={from}
            placeholder="From"
            style={{ borderRadius: '14px 0 0 14px' }}
            onChange={e => setFrom(e.target.value)}
          />

          <input
            type="number"
            value={to}
            placeholder="To"
            style={{
              borderRadius: '0 14px 14px 0',
              marginRight: '10px',
              borderLeft: ' 1px solid rgba(138, 138, 137, 0.20)',
            }}
            onChange={e => setTo(e.target.value)}
          />
        </div>
      </Label>
      <ContainerButton>
        <Button type="submit" style={{ marginRight: '5px' }}>
          Search
        </Button>
        <Button type="button" onClick={handleReset}>
          Reset
        </Button>
      </ContainerButton>
    </Forma>
  );
};
