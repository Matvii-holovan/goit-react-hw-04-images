import axios from 'axios';

// const BASE_URL = 'https://pixabay.com/api/';

axios.defaults.baseURL = 'https://pixabay.com/api/'
const KEY = '38739577-5b9ff17fb3b59e43140008137';

export async function pixabayAPI(query, page) {
	return await axios(`?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
	
}