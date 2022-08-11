import React from 'react';
import './MenuItem.scss';
import { useNavigate } from 'react-router-dom';
import { withRouter } from '../../utils/withRouter';

function MenuItem(props) {
  const { title, subtitle, imageUrl, size, linkUrl } = props;
  const style = {
    backgroundImage: `url(${imageUrl})`,
  };
  const navigate = useNavigate();

  return (
    <div className={`menu-item ${size}`} onClick={() => navigate(linkUrl)}>
      <div className="background-image" style={style}></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
