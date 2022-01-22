import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';
import './directory-menu.styles.scss';

const DirectoryMenu = (props) => {
  return (
    <div className="directory-menu container">
    {props.sections.map(({ id, ...otherProps }) => {
      return <MenuItem
        key={id}
        subtitle="Shop now"
        {...otherProps}
      />
    })}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(DirectoryMenu);