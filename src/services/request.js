import axios from 'axios'

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
})

api.interceptors.request.use((config) => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
    }
    return config
})

export const request = {
    get: async (route, params = {}) => {
        try {
            const response = await api.get(route, { params })
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    },

    post: async (route, data = {}, config = {}) => {
        try {
            const response = await api.post(route, data, config)
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    },

    put: async (route, data = {}) => {
        try {
            const response = await api.put(route, data)
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    },

    delete: async (route) => {
        try {
            const response = await api.delete(route)
            return response.data
        } catch (error) {
            throw error.response?.data || error.message
        }
    }
}

export default api