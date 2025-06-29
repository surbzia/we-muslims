const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const api = {
    setting: `${BASE_URL}/settings`,
    content: (query)=> `${BASE_URL}/page?for=${query}`,
    gallery: (query)=> `${BASE_URL}/gallery${query}`,
    program: (query) => `${BASE_URL}/program${query}`,
    submitQuery: `${BASE_URL}/contact/submit`,
    events: (query = ' ') => `${BASE_URL}/events${query}`,
    eventsDetail: (id) => `${BASE_URL}/events/${id}`,
    donate: `${BASE_URL}/donate`,
    donationUpdatePaymentStatus: `${BASE_URL}/donation/update-payment-status`,
    getPaymentIntent: `${BASE_URL}/stripe/get-payment-intent`,
}
export default api;