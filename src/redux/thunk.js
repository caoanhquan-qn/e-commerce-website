import { getCollectionsAndDocuments } from '../components/utils/fireBase';
import { fetchData, fetchInitialData } from './action';
export const fetchDataByDataType = (dataType) => {
  return async (dispatch) => {
    const data = await getCollectionsAndDocuments(dataType);
    switch (dataType) {
      case 'categories':
        dispatch(fetchData(data));
        break;
      case 'sections':
        data.sort((a, b) => a.id - b.id);
        dispatch(fetchInitialData(data));
        break;
      default:
        break;
    }
  };
};
