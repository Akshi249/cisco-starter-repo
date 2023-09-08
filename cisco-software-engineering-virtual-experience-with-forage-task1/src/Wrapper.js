import React from 'react';

function Wrapper({children}){
 return (
<div className="wrapper">
    <div className="wrapper-content">
        <p>{children}</p>
    </div>
</div>
 );
}

export default Wrapper;