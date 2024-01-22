// src/components/LocationMap.tsx
import React, { useState } from 'react';

const LocationMap: React.FC = () => {
  const [map1Visible, setMap1Visible] = useState(true);

  const toggleMap = () => {
    setMap1Visible((prev) => !prev);
  };

  const map1EmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5050597124796!2d30.057418276043688!3d-1.9511665367164857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca5a86d814c61%3A0x7d3b83e12b1c11a9!2sNorrsken%20House%20Kigali!5e0!3m2!1sen!2ske!4v1705915335560!5m2!1sen!2ske'; // Norrsken
  const map2EmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.845206165526!2d36.79876757603954!3d-1.2654698356059417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17390a6a9c79%3A0xe74f55367c903b6e!2sNairobi%20Garage!5e0!3m2!1sen!2ske!4v1705915402267!5m2!1sen!2ske'; // Nairobi Garage

  return (
    <div className='bg-base-whites-var-2 w-full'>
    <section className="self-stretch flex flex-col items-start justify-start text-13xl text-base-blacks-var-1 p-[20px] gap-[20px]">
        <div className="self-stretch flex flex-row items-center justify-start py-[5px] px-5 gap-[30px] border-[1px] border-solid border-base-blacks-var-1">
          <h2 className="m-0 relative font-normal text-wide-screen-body text-base-blacks-var-1"> our locations </h2>
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[10px] text-lg">
            <div className="bg-contemporary-var-2 flex flex-row items-center justify-start py-[5px] px-5 gap-[20px] cursor-pointer">
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <div className="relative" onClick={toggleMap}>Norrsken House Kigali</div>
                <div>&</div>
                <div className="relative" onClick={toggleMap}>Nairobi Garage</div>
              </div>                
            </div>
          </div>
        </div>
      <iframe
        title={`Google Map ${map1Visible ? '1' : '2'}`}
        width="100%"
        height="400"
        frameBorder="0"
        style={{ border: 0 }}
        src={map1Visible ? map1EmbedUrl : map2EmbedUrl}
        allowFullScreen
      />
    </section>
    </div>
    
  );
};

export default LocationMap;
