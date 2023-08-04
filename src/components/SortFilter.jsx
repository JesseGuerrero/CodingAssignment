import React from 'react';

const SortFilter = ({ setSortType, sortType, setFilterInput }) => {
    const oppositeSort = (sort) => {
        return sort == "ascending" ? "descending" : "ascending"
    }
    const getOppositeSort = oppositeSort(sortType)

    const toggleSort = () => {
        setSortType(getOppositeSort)
    }

    const handleInputFilter = (event) => {
        setFilterInput(event.target.value)
    }

    return (
        <div style={{width: "100%"}}>
            <div>
                Make <a onClick={toggleSort}>{getOppositeSort}</a> <input type={"text"} onChange={handleInputFilter} placeholder={"Filter Last Name"}/>
            </div>
        </div>
    );
};

export default SortFilter;
