import { useNavigate } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, subtitle, linkUrl }) => {
  const navigate = useNavigate();
  return (
    <div className={`menu-item`} onClick={() => navigate(linkUrl)}>
      <div className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}>
      </div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  );
}

export default MenuItem;