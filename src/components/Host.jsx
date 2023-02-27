import React from 'react';

const Host = ({ host }) => {
   const isHostSplited = host.name.split(' ');
   const [name, lastname] = isHostSplited;

   return (
      <div className="host">
         <div className="host_name">
            <p className="host_firstname">{name.trim()}</p>
            <p className="host_lastname">{lastname.trim()}</p>
         </div>

         <img src={host.picture} alt="" className="host_picture" />
      </div>
   );
};

export default Host;
