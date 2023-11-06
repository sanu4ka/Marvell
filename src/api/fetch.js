export const fetchData = async searchTerm => {
  const term = searchTerm;
  try {
    const res = await fetch(
      `https://gateway.marvel.com/v1/public/${term}?apikey=eed8fd1a9a4254697c0f7daeda206088`
    );
    const data = await res.json();
    localStorage.setItem(term, JSON.stringify(data));
    return data.data.results;
  } catch (error) {
    console.log('Error fetching data. ', error);
  }
};
