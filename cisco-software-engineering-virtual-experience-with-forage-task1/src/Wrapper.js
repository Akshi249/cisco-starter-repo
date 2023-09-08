import React from 'react';

function Wrapper({heading, children}){
 return (
<div className="wrapper">
    <div className="wrapper-header">
        <h2>{heading}</h2>
    </div>
    <div className="wrapper-content">
        <p>{children}</p>
    </div>
</div>
 );
}

export default Wrapper;