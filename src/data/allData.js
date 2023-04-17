// import blogsData from './blogsData';
// import itemsData from './itemsData';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import { useMemo } from 'react';
// function AllData() {
//   const [blogs, setBlogs] = useState([]);
//   const [items, setItems] = useState([]);
//   const newData = [...blogs, ...items];
//   const [allData, setAllData] = useState([]);
//   useEffect(() => {
//     setBlogs(blogsData);
//   }, [blogsData]);
//   useEffect(() => {
//     setItems(itemsData);
//   }, [itemsData]);
//   useEffect(() => {
//     setAllData(newData);
//   }, []);
//   const memoizedData = useMemo(() => {
//     return allData;
//   }, [allData]);
//   return memoizedData;
// }
// export default AllData;
