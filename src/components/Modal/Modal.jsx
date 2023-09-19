import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Overlay,
  Container,
  CloseButton,
  Image,
  Header,
  Text,
  Text2,
  SemiHeader,
  TextBG,
  SpanBG,
  Button,
} from './Modal.styled';

export const Modal = ({ onClose, item }) => {
  useEffect(() => {
    const handleEsc = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const {
    id,
    img,
    photoLink,
    make,
    model,
    year,
    address,
    type,
    functionalities,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    rentalConditions,
    mileage,
    rentalPrice,
  } = item;

  return createPortal(
    <Overlay onClick={onClose}>
      <Container>
        <CloseButton onClick={onClose} />
        <Image alt="car" src={img || photoLink} />
        <Header>
          {make} <span style={{ color: '#3470FF' }}>{model}</span>, {year}
        </Header>
        <Text>
          {address.split(', ').slice(1).join(' | ')} | id: {id} | Year: {year} |
          Type: {type}
        </Text>
        <Text>
          Fuel Consumption: {fuelConsumption} | Engine Size: {engineSize}
        </Text>
        <Text2>{description}</Text2>
        <SemiHeader>Accessories and functionalities:</SemiHeader>
        <Text>{accessories.join(' | ')}</Text>
        <Text>{functionalities.join(' | ')} </Text>
        <SemiHeader>Rental Conditions: </SemiHeader>
        <div style={{ marginBottom: '24px' }}>
          {rentalConditions.split('\n').map(cond =>
            !cond.includes(':') ? (
              <TextBG key={cond}>{cond}</TextBG>
            ) : (
              <TextBG key={cond}>
                {cond.split(':')[0]} : <SpanBG>{cond.split(':')[1]}</SpanBG>
              </TextBG>
            )
          )}
          <TextBG>
            Mileage :
            <SpanBG>
              {mileage.toString().split('').toSpliced(-3, 0, ',').join('')}
            </SpanBG>
          </TextBG>
          <TextBG>
            Price : <SpanBG>{rentalPrice.slice(1)}$</SpanBG>
          </TextBG>
        </div>
        <Button
          type="button"
          onClick={() => window.open('tel:+380730000000', '_self')}
        >
          Rent a car
        </Button>
      </Container>
    </Overlay>,
    document.querySelector('#modal')
  );
};
