import React from 'react';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            search: '',
            type: 'all',
        };
    }

    handleKey = (event) => {
        if (event.code === 'Enter') {
            this.props.onSearch(this.state.search, this.state.type);
        }
    };

    handleFilter = (event) => {
        this.setState(
            () => ({ type: event.target.dataset.type }),
            () => this.props.onSearch(this.state.search, this.state.type)
        );
    };

    render() {
        return (
            <>
                <div className='row'>
                    <div className='input-field col s12'>
                        <input
                            name='search'
                            type='search'
                            className='validate'
                            placeholder='Search'
                            onChange={(event) =>
                                this.setState({ search: event.target.value })
                            }
                            value={this.state.search}
                            onKeyDown={this.handleKey}
                        />
                        <button
                            className='btn search-btn'
                            onClick={() =>
                                this.props.onSearch(
                                    this.state.search,
                                    this.state.type
                                )
                            }
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
                                onChange={this.handleFilter}
                                checked={this.state.type === 'all'}
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
                                onChange={this.handleFilter}
                                checked={this.state.type === 'movie'}
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
                                onChange={this.handleFilter}
                                checked={this.state.type === 'series'}
                            />
                            <span>Series</span>
                        </label>
                    </p>
                </form>
            </>
        );
    }
}

export { Search };
