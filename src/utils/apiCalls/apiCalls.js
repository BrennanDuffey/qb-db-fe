export const fetchWithCount = async (count) => {
  const response = await fetch(`http://localhost:3000/api/v1/tossups/${count}`);
  if(!response.ok) {
    throw Error('Hmm something went wrong please refresh the page')
  }
  const result = await response.json();
  return result
}

export const fetchWithOptions = async (count, selectedCategories) => {
  const category = selectedCategories.join('&')
  const response = await fetch(`http://localhost:3000/api/v1/tossups/${category}/${count}`);
  if(!response.ok) {
    throw Error('Hmm something went wrong please refresh the page')
  }
  const result = await response.json();
  return result
}
