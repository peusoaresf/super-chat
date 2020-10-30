import request from '../request'

const getUserDetails = async () => {
  const { data } = await request().get('/api/user/details')

  return data
}

export {
  getUserDetails
}