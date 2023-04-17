import itemData from '../../../data/itemsData';
import { useMemo, useState, useEffect } from 'react';
function Collections() {
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    setCollections(itemData);
  }, []);
  const memoizedCollections = useMemo(() => {
    return collections;
  }, [collections]);
  return memoizedCollections;
}

export default Collections;
