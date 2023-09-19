import { useState } from 'react';
import Heart from '../../images/Heart.svg';
import HeartActive from '../../images/HeartActive.svg';
import { Modal } from '../Modal/Modal';
import { CardContainer, Icon, Image, Text, Text2, Button } from './Card.styled';

export const Card = ({ item, favorite, handleFavorite }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const {
    img,
    photoLink,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    id,
    functionalities,
    mileage,
  } = item;

  return (
    <CardContainer>
      <Icon
        alt="heart"
        src={favorite?.includes(id) ? HeartActive : Heart}
        onClick={() => handleFavorite(id)}
      />
      <Image alt="car" src={img || photoLink} />
      <Text>
        {make}
        {(make + model + year).length < 25 && (
          <span style={{ color: '#3470FF', marginLeft: '5px' }}>{model}</span>
        )}{' '}
        , {year}
        <span style={{ display: 'inline-block', marginLeft: 'auto' }}>
          {rentalPrice}
        </span>
      </Text>
      <Text2>
        {address.split(', ').slice(1).join(' | ')} | {rentalCompany} | {type} |{' '}
        {model} | {mileage} | {functionalities[0]}
      </Text2>
      <Button onClick={openModal}>Learn more</Button>
      {isOpen && <Modal onClose={closeModal} item={item} />}
    </CardContainer>
  );
};
