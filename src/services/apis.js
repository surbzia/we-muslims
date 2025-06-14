const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const api = {
    setting: `${BASE_URL}/settings`,
    gallery: `${BASE_URL}/gallery`,
}
export default api;