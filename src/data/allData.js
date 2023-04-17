import blogsData from './blogsData';
import itemsData from './itemsData';
import { useState } from 'react';
function AllData() {
  const newData = [...blogsData, ...itemsData];
  const [allData, setAllData] = useState(newData);
  return allData;
}
export default AllData;
