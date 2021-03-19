import React, { useState } from 'react';

const Search = (props) => {
    const { onSearch } = props;

    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');

    const handleKey = (event) => {
        if (event.code === 'Enter') {
            onSearch(search, type);
        }
    };

    const handleFilter = (event) => {
        setType(event.target.dataset.type);
        onSearch(search, event.target.dataset.type);
    };

    return (
        <>
            <div className='row'>
                <div className='input-field col s12'>
                    <input
                        name='search'
                        type='search'
                        className='validate'
                        placeholder='Search'
                        onChange={(event) => setSearch(event.target.value)}
                        value={search}
                        onKeyDown={handleKey}
                    />
                    <button
                        className='btn search-btn'
                        onClick={() => onSearch(search, type)}
                    >
                        Search
                    </button>
                </div>
            </div>
            <form action='#' className='filter-form'>
                <p>
                    <label>
                        <input
                            name='filter'
                            type='radio'
                            data-type='all'
                            onChange={handleFilter}
                            checked={type === 'all'}
                        />
                        <span>All</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input
                            name='filter'
                            type='radio'
                            data-type='movie'
                            onChange={handleFilter}
                            checked={type === 'movie'}
                        />
                        <span>Movies</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input
                            name='filter'
                            type='radio'
                            data-type='series'
                            onChange={handleFilter}
                            checked={type === 'series'}
                        />
                        <span>Series</span>
                    </label>
                </p>
            </form>
        </>
    );
};

export default Search;
