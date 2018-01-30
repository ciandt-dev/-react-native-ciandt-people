const API = `https://people.cit.com.br/search/json/`

export const getUsers = (txt) => {
  const API_KEY = require('../Auth').API_KEY;
  const url = `${API}?q=${txt}`
  return fetch(url,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Basic ${API_KEY}`,
      }
    })
    .then(res => res.json())
    .then(res => {
      return res.data
      ? res.data.map(user => {
        return {
          name: user[0],
          login: user[1],
          role: user[4],
          coach: user[5],
          pdm: user[6],
        }
      })
      : []
    })
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
    uri: `https://people.cit.com.br/photos/${login}.jpg`,
    method: 'GET',
    headers: {
      Authorization: `Basic ${API_KEY}`,
    }
  }
}
