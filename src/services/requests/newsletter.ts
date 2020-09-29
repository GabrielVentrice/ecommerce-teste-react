import api from '../api'

export const postNewsletter = async (name: string, email: string) => {
  return await api.post(`/newsletter`, { name, email })
}
