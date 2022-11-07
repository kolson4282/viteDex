const getPokemonFromURL = async <T>(url: string): Promise<T> => {
  const r = await fetch(url);
  return r.json() as T;
};

export default getPokemonFromURL;
