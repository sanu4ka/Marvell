import md5 from 'md5';

export const fetchData = async searchTerm => {
  const term = searchTerm;
  try {
    const now = Date.now();
    const publicKey = 'eed8fd1a9a4254697c0f7daeda206088';
    const privateKey = 'aefb1aa9df17d0d419e086f920e8fd4ef79c41eb';
    let params = {
      apikey: publicKey,
      ts: now,
    };
    params.hash = md5(params.ts + privateKey + publicKey);
    const res = await fetch(
      `https://gateway.marvel.com/v1/public/${term}?apikey=${params.apikey}&ts=${params.ts}&hash=${params.hash}`
    );
    const data = await res.json();
    // localStorage.setItem(term, JSON.stringify(data));
    return data.data.results;
  } catch (error) {
    console.log('Error fetching data. ', error);
  }
};
