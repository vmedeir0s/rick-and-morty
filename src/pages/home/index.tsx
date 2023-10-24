import { useEffect, useState } from 'react';
import { getEpisodes } from '../../services/fetchAPI';
import { EpisodeType } from '../../utils/types';
import Loading from '../../components/Loading';

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [episodes, setEpisodes] = useState<EpisodeType[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getEpisodes();
      setEpisodes(data);
      setLoading(false);
    };

    const loadTimer = setTimeout(() => {
      getData();
    }, 1300);

    return () => {
      clearTimeout(loadTimer);
    };
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <h2>Home Page</h2>
      <div>
        {episodes.map((episode) => (
          <div key={episode.id}>
            <h4>{episode.name}</h4>
            <p>{episode.air_date}</p>
            <p>{episode.episode}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
