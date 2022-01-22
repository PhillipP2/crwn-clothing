import  CollectionPreview  from '../../components/collection-preview/collection-preview.component';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';

const CollectionPage = () => {
  const params = useParams();
  const collection = useSelector(state => 
    selectCollection(params.categoryId)(state)
  );

  return (
    <div className="container">
      <h2>{`Category page: ${params.categoryId}`}</h2>
      {
        collection
        ? <CollectionPreview {...collection} />
        : 'Collection not found'
      }
    </div>
  );
}

export default CollectionPage;