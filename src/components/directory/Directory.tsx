import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MenuItem from '../menu-item/MenuItem';
import { selectSections } from '../../redux/selector';
import { startFetchingInitialData } from '../../redux/action';
import { sectionType } from '../../redux/types';
import './Directory.scss';

const Directory = () => {
  const dispatch = useDispatch();
  const sections = useSelector(selectSections);

  useEffect(() => {
    dispatch(startFetchingInitialData());
  }, []);

  return (
    <div className="directory-menu">
      {sections.map(({ title, id, imageUrl, size, linkUrl }: sectionType) => {
        return <MenuItem key={id} title={title.toUpperCase()} subtitle="SHOP NOW" imageUrl={imageUrl} size={size} linkUrl={linkUrl} />;
      })}
    </div>
  );
};
export default Directory;
