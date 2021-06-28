import React from 'react'
import * as assets from "../../assets/assetes"

function Profile() {
   return (
      <div>
         {/* // ? navbar above  */}
         <div className="flex space-around">
            {/* back */}
            <div>
               <img src={assets.icons.backIcon} alt="back" width="30" />
            </div>
            {/* option */}
            <div>

            </div>
         </div>
      </div>
   )
}

export default Profile
