import React from 'react';
import { Card } from './Card';

class Cards extends React.Component {
    render() {
        const { movies = [] } = this.props;
        return (
            <React.Fragment>
                <div
                    className='row'
                    style={{
                        display: 'grid',
                        gridTemplateColumns:
                            'repeat(auto-fill, minmax(250px, 1fr)',
                        gap: '1rem',
                    }}
                >
                    {movies.length ? (
                        movies.map((movie) => (
                            <Card {...movie} key={movie.imdbID} />
                        ))
                    ) : (
                        <h4>Nothing found</h4>
                    )}
                </div>
            </React.Fragment>
        );
    }
}

export { Cards };
