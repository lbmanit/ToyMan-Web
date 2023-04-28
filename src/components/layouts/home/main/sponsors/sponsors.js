import React, { useState } from 'react';
import sponsor1 from '../../../../../assets/images/sponsors/logo1_compact.png';
import sponsor2 from '../../../../../assets/images/sponsors/logo2_compact.png';
import sponsor3 from '../../../../../assets/images/sponsors/logo3_compact.png';
import sponsor4 from '../../../../../assets/images/sponsors/logo5_compact.png';
function Sponsors() {
  const sponsorsImg = [sponsor1, sponsor2, sponsor3, sponsor4];
  const [sponsors, setSponsors] = useState(sponsorsImg);
  const sponsor = sponsors.map((sponsor, index) => {
    return <img key={index} src={sponsor} alt={index} />;
  });
  return (
    <section className='container m-auto flex justify-between my-16 left-active'>
      {sponsor}
    </section>
  );
}

export default Sponsors;
