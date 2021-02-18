import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from '../../../axios';
import requests from '../../../requests';

import Head from 'next/head';
import Layout from '../../Components/Layout';
import MovieRow from '../../Components/MovieRow';

export default function Home() {
    const [movie, setMovie] = useState([]);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }

    const handleFavorite = () => {
        if (user) {
            let favorites = [];
            favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            favorites.push(movie);
            localStorage.setItem('favorites', JSON.stringify(favorites));
        } else {
            alert('You must be logged in to favorite a movie');
            // history.push('/login');
        }
    };

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchPopular);
            const { results } = request.data;
            const randomMovie = results[Math.floor(Math.random() * results.length - 1)];
            setMovie(randomMovie);
        }
        fetchData();
    }, []);

    return (
        <>
            <Head>
                <title>Jefflix | Find Movies</title>
            </Head>
            <Layout>
                <header
                    className="object-contain"
                    style={{
                        height: '448px',
                        backgroundSize: 'cover',
                        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                        backgroundPosition: 'center center',
                    }}
                >
                    <div className="banner-contents pt-3 ml-4 h-full pt-32">
                        <h1 className="text-white text-5xl font-extrabold pb-1">
                            {movie?.title || movie?.name || movie?.original_name}
                        </h1>

                        <div className="banner-buttons">
                            <button
                                className="cursor-pointer font-bold text-white px-8 py-2 mr-4 mt-2 bg-gray-900 bg-opacity-50 rounded hover:text-black hover:bg-gray-200 duration-200"
                                onClick={handleFavorite}
                            >
                                Favorite
                            </button>
                            <Link href={`/movie/${movie?.id}`}>
                                <button className="cursor-pointer font-bold text-white px-8 py-2 mr-4 mt-2 bg-gray-900 bg-opacity-50 rounded hover:text-black hover:bg-gray-200 duration-200">
                                    Details
                                </button>
                            </Link>
                        </div>

                        <h1 className="text-white w-2/5 pt-4 ">{truncate(movie?.overview, 150)}</h1>
                    </div>
                    <div
                        className="h-28"
                        style={{
                            backgroundImage:
                                'linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111)',
                        }}
                    />
                </header>
                <MovieRow title="Trending Now" fetchUrl={requests.fetchTrending} />
                <MovieRow title="Popular Movies" fetchUrl={requests.fetchPopular} />
                <MovieRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
                <MovieRow title="Trending Now" fetchUrl={requests.fetchPopular} />
            </Layout>
        </>
    );
}
