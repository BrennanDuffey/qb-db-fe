const fetchWithOptions = async (count, selectedCategories) => {
  const category = selectedCategories.join('&')
  const response = await fetch(`http://localhost:3000/api/v1/tossups/${category}/${count}`);
}