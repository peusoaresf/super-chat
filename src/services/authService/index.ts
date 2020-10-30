import request from '../request'

const signup = async (username: string, password: string): Promise<string> => {
  const { data } = await request().post('/auth/signup', { username, password })

  return data.token
}

const signin = async (username: string, password: string): Promise<string> => {
  const { data } = await request().post('/auth/signin', { username, password })

  return data.token
}

const signout = async () => {
  await request().post('/auth/signout')
}

export {
  signup,
  signin,
  signout
}