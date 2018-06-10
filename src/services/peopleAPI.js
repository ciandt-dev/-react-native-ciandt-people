const BASE_URL = `https://people.cit.com.br`

export const getUsers = (txt) => {
  const API_KEY = require('../Auth').API_KEY;
  const url = `${BASE_URL}/search/json/?format=associative&q=${txt}`
  return fetch(url,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Basic ${API_KEY}`,
      }
    })
    .then(res => res.json())
    .then(res => res.data || [])
    .catch(console.error)
}

export const getUserByLogin = (login) => {
  const API_KEY = require('../Auth').API_KEY;
  return getUsers(login)
    .then(res => res.filter(item => item.login === login))
    .then(res => res.shift())
}

export const getAvatar = (login) => {
  const API_KEY = require('../Auth').API_KEY;
  return {
    uri: `${BASE_URL}/photos/${login}.jpg`,
    method: 'GET',
    headers: {
      Authorization: `Basic ${API_KEY}`,
    }
  }
}
