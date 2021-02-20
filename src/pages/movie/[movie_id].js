import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../../Components/Layout';
import axios from '../../../axios';
import apiKey from '../../../config';

function movie_id({movie, credits}) {
    const router = useRouter();
    const { movieId } = router.query;
    const [movie, setMovie] = useState({});
    const [credits, setCredits] = useState([]);

    // const handleFavorite = () => {
    //     if (user) {
    //         let favorites = [];
    //         favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    //         favorites.push(movie);
    //         localStorage.setItem('favorites', JSON.stringify(favorites));
    //     } else {
    //         alert('You must be logged in to favorite a movie');
    //         history.push('/login');
    //     }
    // };

    return (
        <Layout>
            <div className="overlay">
                <div
                    className="detail"
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                        backgroundPosition: 'center center',
                    }}
                >
                    <div className="detail-contents">
                        <h2 className="detail-title">
                            {movie?.title || movie?.name || movie?.original_name}
                        </h2>
                        <h2 className="detail-description">{movie?.overview}</h2>
                        <button className="detail-fav-btn">Favorite This Movie</button>
                        <h2 className="detail-cast-title">Starring:</h2>
                        {credits &&
                            credits?.map((actor, index) => {
                                return (
                                    <p className="detail-cast" key={index}>
                                        {actor.name} as {actor.character}
                                    </p>
                                );
                            })}
                        <h2 className="detail-facts-title">Fun Facts:</h2>
                        <p className="detail-facts">Budget: ${movie?.budget}</p>
                        <p className="detail-facts">
                            Genres:
                            {movie?.genres?.map((genre, index) => {
                                return ` ${genre.name}, `;
                            })}
                        </p>
                        <p className="detail-facts">
                            See more <a href={movie?.homepage}>here</a>
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default movie_id;

export async function getStaticPaths() {
    
}

export async function getStaticProps() {
    const request = await axios.get(`/movie/${}?api_key=${apiKey}&language=en-US`);
    const { results } = request.data;

    return {
        props: {
            results,
        }
    }
}