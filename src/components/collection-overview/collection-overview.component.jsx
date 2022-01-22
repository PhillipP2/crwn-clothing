import CollectionPreview from '../collection-preview/collection-preview.component';
import { connect } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';
import { createStructuredSelector } from 'reselect';

const CollectionOverview = ({ collections }) => {
  return (
    <div className="container">
      {
        collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} limit="4" />
        )) 
      }
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);