import React from 'react';

const SortFilter = ({ setSortType, sortType }) => {
    const oppositeSort = (sort) => {
        return sort == "ascending" ? "descending" : "ascending"
    }
    const getOppositeSort = oppositeSort(sortType)

    const toggleSort = () => {
        setSortType(getOppositeSort)
    }

    //Filter by last name

    return (
        <div style={{width: "100%"}}>
            <div>
                Make <a onClick={toggleSort}>{getOppositeSort}</a>
            </div>
        </div>
    );
};

export default SortFilter;
