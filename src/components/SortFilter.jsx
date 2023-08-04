import React from 'react';

const SortFilter = ({ setSortType, sortType }) => {
    //Toggle Sort
    //getOppositeSort
    //Filter by last name

    return (
        <div style={{width: "100%"}}>
            <div border="1">
                Make <a>{sortType}</a>
            </div>
        </div>
    );
};

export default SortFilter;
