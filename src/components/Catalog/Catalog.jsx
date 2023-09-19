import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { useGetRentCarQuery } from '../../redux/rentCarApi';
import { Card } from '../Card/Card';
import { CatalogList, Button } from './Catalog.styled';

export const Catalog = ({ filter }) => {
  const { data } = useGetRentCarQuery();
  const { pathname } = useLocation();
  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem('favorite')) || []
  );
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    localStorage.setItem('favorite', JSON.stringify(favorite));
  }, [favorite]);

  useEffect(() => {
    setCurrentPage(1);
  }, [pathname]);

  const { brand = '', price = '', from = '', to = '' } = filter;

  const filteredData = data?.filter(({ make, rentalPrice, mileage }) => {
    const isBrandMatch = brand === '' || brand === make;
    const isPriceMatch =
      Number(price === '' ? Infinity : price) > Number(rentalPrice.slice(1));
    const isMileageMatch =
      Number(from === '' ? 0 : from) <= mileage &&
      Number(to === '' ? Infinity : to) >= mileage;

    return isBrandMatch && isPriceMatch && isMileageMatch;
  });

  const favoriteData = pathname.includes('catalog')
    ? filteredData
    : filteredData?.filter(({ id }) => favorite.includes(id));

  const page = Math.ceil(favoriteData?.length / 8);
  const renderData = favoriteData?.slice(0, currentPage * 8);

  const handleFavorite = id => {
    if (favorite.includes(id)) {
      setFavorite(prev => prev.filter(item => item !== id));
    } else {
      setFavorite(prev => [...prev, id]);
    }
  };

  const handlePage = () => {
    setCurrentPage(prev => prev + 1);
  };
  return (
    <>
      <CatalogList>
        {renderData?.map(item => (
          <Card
            key={item.id}
            item={item}
            favorite={favorite}
            handleFavorite={handleFavorite}
          />
        ))}
      </CatalogList>
      {currentPage < page && <Button onClick={handlePage}>Load more</Button>}
    </>
  );
};
