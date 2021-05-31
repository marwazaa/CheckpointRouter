import React, { useState } from 'react';

function SerachTitile({search})

 {
      const [title, settitle] = useState("");
 let onchagHand=(e)=>
 {
     settitle(e.target.value.toLowerCase());
 search(title);
 }
    return (
        <div>
            <input
        type="search"
        placeholder="Search Movie" 
        // onChange={(e)=>search(e.target.value.toLowerCase())} 
         onChange={onchagHand}
        />
        
        </div>
    )
}

export default SerachTitile
