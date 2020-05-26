import React from 'react';

const Scroll = (pros) => {

    
return (
    <div style={ {overflowY: 'scroll', 
    border: '5px solid black', 
    height: '800px' }}>
        {pros.children}
    </div>
);
     
 
};

export default Scroll;