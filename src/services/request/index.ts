import axios from 'axios'

// TODO: refatorar state manager para utilizar redux ao invés de recoil e evitar situação como abaixo ???

const config = {
  authToken: '' // fedegoso
}

export {
  config // eca
}

export default () => axios.create({
  baseURL: 'http://192.168.0.21:3000',
  headers: {
    'x-access-token': config.authToken
  }
})