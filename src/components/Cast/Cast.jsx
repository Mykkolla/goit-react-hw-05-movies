import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from '../../Api/Api';
import { ImgProfail, UlProfail } from './cast.styled';
import PropTypes from 'prop-types';

import userImg from '../../img/No_Image_Available.jpg';

const Cast = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { movieId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { cast } = await getMovieCast(movieId);
        setData(cast);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [movieId]);

  return (
    <>
      {loading ? (
        'Loading...'
      ) : data && data.length > 0 ? (
        <div>
          <UlProfail>
            {data.map(({ name, character, profile_path, id }) => (
              <li key={id}>
                {profile_path ? (
                  <ImgProfail
                    alt={name}
                    src={`https://image.tmdb.org/t/p/w92${profile_path}`}
                  />
                ) : (
                  <ImgProfail alt={name} src={userImg} />
                )}

                <p>{name}</p>
                <p>{character}</p>
              </li>
            ))}
          </UlProfail>
        </div>
      ) : (
        <p>No data found</p>
      )}
    </>
  );
};

Cast.propTypes = {
  movieId: PropTypes.number,
};

export default Cast;
