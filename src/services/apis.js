const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const api = {
    setting: `${BASE_URL}/settings`,
    content: (query)=> `${BASE_URL}/page?for=${query}`,
    gallery: (query)=> `${BASE_URL}/gallery${query}`,
    program: (query)=> `${BASE_URL}/program${query}`,
}
export default api;