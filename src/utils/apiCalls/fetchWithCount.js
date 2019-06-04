const fetchWithCount = async (count) => {
  const response = await fetch(`http://localhost:3000/api/v1/tossups/${count}`);
  if(!respones.ok) {
    throw Error('Failed to gather data')
  }
  const result = await response.json();
}

export default fetchWithCount