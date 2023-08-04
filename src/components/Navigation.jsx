import React from 'react';

const Navigation = ({ setPageNumber, pageNumber }) => {
    const previousPage = () => {
        setPageNumber(pageNumber - 1)
    }
    const nextPage = () => {
        setPageNumber(pageNumber + 1)
    }

    return (
        <div style={{width: "100%"}}>
            <div style={{margin: "0 auto"}} border="1">
                <a onClick={previousPage}>{'<<'}prevous</a> - <a onClick={nextPage}>next{'>>'}</a>
            </div>
        </div>
    );
};

export default Navigation;
