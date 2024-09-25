import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import WidgetsItem from './WidgetsItem';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Widgets() {
    const feedItems = [
        {
          id: 1,
          name: "Nitika Verma",
          description: "Open To Hire // SEO Intern // BDE // Location: F-244...",
          imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQEKphu2Eh1Jmg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1709554624001?e=1732752000&v=beta&t=cRtFAbsnqRZvDwIsEntg3ffLWQ5btKabaRwq0nTbtYw",
        },
        {
          id: 2,
          name: "Belfast AWS User Group (BelfAWSt UG)",
          description: "Company • Education",
          imageUrl: "https://media.licdn.com/dms/image/v2/D4E0BAQGDSIbr_VH5ZA/company-logo_100_100/company-logo_100_100/0/1715786343560?e=1735171200&v=beta&t=l7ubtKMyfQ2wT1z_IEBr5Jwwq0W-L-SM5O-9ACVkO1w",
        },
        {
          id: 3,
          name: "Khushi Minda",
          description: "SIH'23 WINNER 🏅 || VIHAAN 007 (DTU) WINNER...",
          imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQE9Z9xsOtHjRQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723487362628?e=1732752000&v=beta&t=_x4QibV7LfxT0GYt7dQRTz9i3itq8F4JxrF03OOBhGU",
        },
      ];
    

  return (
    <div className="addToFeed">
      <div className="addToFeed__header">
        <h3>Add to your feed</h3>
        <InfoIcon />
      </div>
      {feedItems.map((item) => (
        <WidgetsItem 
          key={item.id} 
          name={item.name} 
          description={item.description} 
          imageUrl={item.imageUrl} 
        />
      ))}
      <a href="#" className="addToFeed__viewMore">
        View all recommendations ➔
      </a>
    </div>
  )
}

export default Widgets