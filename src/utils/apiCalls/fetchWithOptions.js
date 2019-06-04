const fetchWithOptions = async (count, selectedCategories) => {
  const category = selectedCategories.join('&')
  const response = await fetch(`http://localhost:3000/api/v1/tossups/${category}/${count}`);
  if(!respones.ok) {
    throw Error('Failed to gather data')
  }
  const result = await response.json();
}

export default fetchWithOptions