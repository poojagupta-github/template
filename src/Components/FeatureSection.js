import React from 'react';

const FeatureSection =()=>{
    return(
      <div className="bg-success text-center">
      <p className="display-4 text-white p-4">Discover the amazing new app</p>
      <p className="text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, rem?
      </p>
      <div className="row  p-4" style={{display:"flex",flexDirection:'row',justifyContent:"space-between"}}>
        <div className="col-6 text-center">
          <button className="btn btn-warning btn-lg">Play Store</button>
        </div>
        
        <div className="col-6 text-center">
        <button className="btn btn-warning btn-lg">App Store</button>
        </div>
      </div>
    </div>
    )
}
export default FeatureSection;