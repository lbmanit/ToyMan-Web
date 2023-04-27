import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import sponsor1 from '../../../../../assets/images/sponsors/logo1_compact.png';
import sponsor2 from '../../../../../assets/images/sponsors/logo2_compact.png';
import sponsor3 from '../../../../../assets/images/sponsors/logo3_compact.png';
import sponsor4 from '../../../../../assets/images/sponsors/logo5_compact.png';
import Spinner from '../../../../../app/Spinner';
function Sponsors() {
  const sponsorsImg = [sponsor1, sponsor2, sponsor3, sponsor4];
  const [sponsors, setSponsors] = useState(sponsorsImg);
  const sponsor = sponsors.map((sponsor, index) => {
    return <img key={index} src={sponsor} alt={index} />;
  });
  return (
    <LazyLoad height={563} offset={100} once placeholder={<Spinner />}>
      <section className='container m-auto flex justify-between my-16 left-active'>
        {sponsor}
      </section>
    </LazyLoad>
  );
}

export default Sponsors;
