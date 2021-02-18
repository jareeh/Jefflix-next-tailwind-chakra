import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from '../../axios';
import './MovieRow.css';

const imgBaseUrl = 'https://image.tmdb.org/t/p/original/';

function MovieRow({ title, fetchUrl, isLargeRow }) {
    const router = useRouter();

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            const { results } = request.data;
            setMovies(results);
        }

        fetchData();
    }, [fetchUrl]);

    return (
        <div>
            <h2>{title}</h2>
            <div className="flex overflow-y-hidden overflow-x-scroll p-2 hide-scrollbar">
                {movies.map((movie, index) => {
                    return (
                        <img
                            onClick={() => router.push(`/movie/${movie.id}`)}
                            key={movie.id}
                            // className={`row-poster ${isLargeRow && 'row-poster-large'}`}
                            className="object-contain w-full mr-2 duration-300 transform hover:scale-105"
                            src={`${imgBaseUrl}${
                                isLargeRow ? movie.poster_path : movie.backdrop_path
                            }`}
                            alt={movie.title}
                            style={{maxHeight: '100px'}}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default MovieRow
