import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ItemDetail from './itemDetail';
function MainItem() {
  const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const items = JSON.parse(searchParams.get('toys'));
  const mainItem = items.find((item) => item.id === parseInt(id));
  return (
    <section>
      <article>{mainItem && <ItemDetail {...mainItem} />}</article>
    </section>
  );
}

export default MainItem;
