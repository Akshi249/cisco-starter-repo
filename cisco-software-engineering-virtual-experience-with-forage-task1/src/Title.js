import React from 'react';

function Title(){
    const pageTitle=document.title;
    return (<div className="title">
        <h1>{pageTitle}</h1>
    </div>);
}

export default Title;