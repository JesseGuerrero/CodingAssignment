import React from 'react';

const SortFilter = ({ setSortType, sortType }) => {
    const oppositeSort = (sort) => {
        return sort == "ascending" ? "descending" : "ascending"
    }
    const getSortText = oppositeSort(sortType)

    //Toggle Sort
    //Filter by last name

    return (
        <div style={{width: "100%"}}>
            <div border="1">
                Make <a>{getSortText}</a>
            </div>
        </div>
    );
};

export default SortFilter;
