import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { HomePage } from '../../pages/HomePage/HomePage';
import { CatalogPage } from '../../pages/CatalogPage/CatalogPage';

export const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      document.body.classList.add('homepage');
    } else {
      document.body.classList.remove('homepage');
    }
  }, [location.pathname]);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<CatalogPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
};
