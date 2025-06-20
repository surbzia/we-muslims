const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const api = {
    setting: `${BASE_URL}/settings`,
    content: (query)=> `${BASE_URL}/page?for=${query}`,
    gallery: `${BASE_URL}/gallery`,
}
export default api;