import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './InputSearch.css';


function InputSearch() {
    
    return (
        <div className="InputSearch">
            <div className="header__search">
                <input
                    className="header__searchInput"
                    type="text"
                />
                <div className="header__searchIcon">
                    <SearchIcon />
                </div>
            </div>
        </div>
    )
}

export default InputSearch;
