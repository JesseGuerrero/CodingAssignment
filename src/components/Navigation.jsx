import React from 'react';

const Navigation = ({ setPageNumberFromNavigation }) => {
    //prev page function
    //next page function

    return (
        <div style={{width: "100%"}}>
            <div style={{margin: "0 auto"}} border="1">
                <a onClick={}>{'<<'}prevous</a> - <a onClick={}>next{'>>'}</a>
            </div>
        </div>
    );
};

export default Navigation;
