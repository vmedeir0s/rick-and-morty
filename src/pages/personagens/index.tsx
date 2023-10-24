import { useEffect, useState } from 'react';
import { getCharacters } from '../../services/fetchAPI';
import { CharacterType } from '../../utils/types';
import Loading from '../../components/Loading';

export default function Personagens() {
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [characters, setCharactes] = useState<CharacterType[]>([]);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const data = await getCharacters(page);
      setCharactes(data);
      setLoading(false);
    };

    const loadTimer = setTimeout(() => {
      getData();
    }, 900);

    return () => {
      clearTimeout(loadTimer);
    };
  }, [page]);

  if (loading) return <Loading />;

  return (
    <>
      <h2>Personagens</h2>
      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Anterior
        </button>
        <p>{`Página ${page}`}</p>
        <button disabled={page === 10} onClick={() => setPage(page + 1)}>
          Próximo
        </button>
      </div>

      <div>
        {characters.map((character) => (
          <div key={character.id}>
            <h4>{character.name}</h4>
            <img src={character.image} alt={character.name} />
          </div>
        ))}
      </div>
    </>
  );
}
