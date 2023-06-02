import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HeaderTitle, ListMovies, MovieItem } from './home.styled';
import { getTrendingMovies } from '../../Api/Api';

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await getTrendingMovies();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <ListMovies>
        <HeaderTitle>Trending movies:</HeaderTitle>
        {loading
          ? 'Loading...'
          : data.map(({ title, id }) => (
              <MovieItem key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </MovieItem>
            ))}
      </ListMovies>
    </>
  );
};

export default Home;
