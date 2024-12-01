import React from 'react';
import { Link } from 'react-router-dom';

function ContentCard({ title, description, icon, link }) {
  return (
    <div className="content-card">
      <div className="card-header">
        <img src={icon} alt="카테고리 아이콘()" className="card-icon" />
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
      <Link to={link} className="card-link">
        자세히 보기
      </Link>
    </div>
  );
}

export default ContentCard;
