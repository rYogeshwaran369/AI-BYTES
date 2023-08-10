import React from 'react';

import '../Css/AchievementsPage.css';
import AchievementsSegment from './AchievementsSegement';

const AchievementsPage = () => {
  const photos = [
    {
      image: 'https://th.bing.com/th/id/OIP._kNR_7WlpMrWvwQB7BaMvgHaFC?pid=ImgDet&w=628&h=427&rs=1',      // Replace with the actual image URL
      title: 'Photo 1',
      description: 'AI SPAM DETECTOR',
      head:'AI SPAM DETECTOR'
    },
    {
      image: 'https://th.bing.com/th/id/OIP.x6499wVDvv9t_LeFctVuNQHaD9?pid=ImgDet&rs=1',       
      title: 'Photo 2',
      description: 'Description of Photo 2',
      head:'Weather Prediction'
    },
    {
      image: 'https://th.bing.com/th/id/OIP.D5-HwzrCCDWZvzVp9bTVBAHaEx?pid=ImgDet&rs=1',       
      title: 'Photo 2',
      description: 'Description of Photo 2',
      head:'Natural Language processing'
    },
    
    // Add more photo items as needed
  ];
  

  return (
    <div className="achievements-page" >
      {/* Render the AchievementsSegment components here */}
      <div style={{display:'flex',flexDirection:'column',marginLeft:'3%',flexWrap:'wrap'}}>
      <AchievementsSegment content={photos}/>
      

     
      </div>
    </div>
  );
};

export default AchievementsPage;


