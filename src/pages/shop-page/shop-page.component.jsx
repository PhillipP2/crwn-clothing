import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection-page/collection-page.component';

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      <Routes>
        <Route path="" element={<CollectionOverview />} />
        <Route path="/:categoryId" element={<CollectionPage />} />

      </Routes>
      
    </div>
  );
}

export default ShopPage;