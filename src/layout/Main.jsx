import { Cards } from '../components/Cards';
import React from 'react';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            )
            .catch((err) => {
                console.log(err);
                this.setState({ loading: false });
            });
    }

    onSearch = (search, type = 'all') => {
        this.setState({ loading: true });
        fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}${
                type !== 'all' ? `&type=${type}` : ''
            }`
        )
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            )
            .catch((err) => {
                console.log(err);
                this.setState({ loading: false });
            });
    };

    render() {
        const { movies, loading } = this.state;

        return (
            <main className='content container'>
                <Search onSearch={this.onSearch} />
                {loading ? <Preloader /> : <Cards movies={movies} />}
            </main>
        );
    }
}

export { Main };
