import React from 'react';
import DirectoryMenu from '../../components/directory-menu/directory-menu.component';
import './homepage.styles.scss';

const HomePage = () => {
  return (
    <div className="homepage">
      <DirectoryMenu className="directory-menu container" />
    </div>
  )
};

export default HomePage;
