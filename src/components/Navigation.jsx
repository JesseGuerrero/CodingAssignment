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
                <a style={{cursor: "pointer"}} onClick={previousPage}>{'<<'}prevous</a> - <a style={{cursor: "pointer"}} onClick={nextPage}>next{'>>'}</a>
            </div>
        </div>
    );
};

export default Navigation;
