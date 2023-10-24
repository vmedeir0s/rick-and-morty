export type EpisodeType = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  character: string[];
  url: string;
  created: string;
};

export type CharacterType = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;

  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};
