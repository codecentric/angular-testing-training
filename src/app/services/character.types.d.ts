type Info = {
  /** The length of the response */
  count: number;
  /** The amount of pages */
  pages: number;
  /** Link to the next page (if it exists) */
  next: string | null;
  /** Link to the previous page (if it exists) */
  prev: string | null;
};

interface Page<T> {
  /**
   * The API will automatically paginate the responses. You will receive up to `20` documents per page.
   */
  info?: Info;
  results?: T;
}
interface Character extends ResourceBase {
  status: 'Dead' | 'Alive' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
}
interface ResourceBase {
  id: number;
  name: string;
  url: string;
  created: string;
}
interface CharacterLocation {
  name: string;
  url: string;
}

interface Dog {
  name: string;
  image: string;
  bark: string;
}
