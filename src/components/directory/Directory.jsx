import React from 'react';
import MenuItem from '../menu-item/MenuItem';
import { getCollectionsAndDocuments } from '../utils/fireBase';
import './Directory.scss';

class Directory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [],
    };
  }
  componentDidMount() {
    const fetchSectionData = async () => {
      return await getCollectionsAndDocuments('sections');
    };
    fetchSectionData()
      .then((res) => {
        const SECTION_DATA = res.sort((a, b) => a.id - b.id);
        this.setState({ sections: SECTION_DATA });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, id, imageUrl, size, linkUrl }) => {
          return <MenuItem key={id} title={title.toUpperCase()} subtitle="SHOP NOW" imageUrl={imageUrl} size={size} linkUrl={linkUrl} />;
        })}
      </div>
    );
  }
}
export default Directory;
