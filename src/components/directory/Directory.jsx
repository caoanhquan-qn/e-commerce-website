import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataByDataType } from '../../redux/thunk';
import MenuItem from '../menu-item/MenuItem';
import { selectSections } from '../../redux/selector';
import './Directory.scss';

const Directory = () => {
  const dispatch = useDispatch();
  const sections = useSelector(selectSections);

  useEffect(() => {
    dispatch(fetchDataByDataType('sections'));
  }, []);

  return (
    <div className="directory-menu">
      {sections.map(({ title, id, imageUrl, size, linkUrl }) => {
        return <MenuItem key={id} title={title.toUpperCase()} subtitle="SHOP NOW" imageUrl={imageUrl} size={size} linkUrl={linkUrl} />;
      })}
    </div>
  );
};
export default Directory;
