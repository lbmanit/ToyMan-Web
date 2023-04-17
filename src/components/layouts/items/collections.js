import itemData from '../../../data/itemsData';
import { useState } from 'react';
function Collections() {
  const [collections, setCollections] = useState(itemData);
  return collections;
}

export default Collections;
