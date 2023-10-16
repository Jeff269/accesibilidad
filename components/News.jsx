import React from 'react';
import Image from 'next/image';
import Talker from './Talker'; 

const News = ({ backgroundColor, title, buttonText, imageSrc }) => (
  <div style={{ backgroundColor, width: '250px', height: '500px', display: 'flex' }}>
    <div style={{ flex: '1', padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    </div>
    <div style={{ flex: '1' }}>
      <Image
        src={imageSrc}
        alt="Panel Image"
        width={250}
        height={500}
      />    
    </div>
  </div>
);

export default Panel;