import axios from 'axios'

const UPDATE_USER_NAME = 'UPDATE_USER_NAME'
const SET_REPOSITORIES = 'SET_REPOSITORIES'
const READ_MD = 'READ_MD'

const initialState = {
  username: '',
  list: [],
  readmd: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_NAME: {
      return {
        ...state,
        username: action.name
      }
    }
    case SET_REPOSITORIES: {
      return {
        ...state,
        list: action.list
      }
    }
    case READ_MD: {
      return {
        ...state,
        readmd: action.readmd
      }
    }
    default:
      return state
  }
}

export function updateUsername(name) {
  return { type: UPDATE_USER_NAME, name }
}

export function setRepositories(username) {
  return function (dispatch) {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((r) => r.json())
      .then((list) => {
        dispatch({ type: SET_REPOSITORIES, list })
      })
  }
}

export function getReadme(name, reponame) {
  return function (dispatch) {
    axios(`https://api.github.com/repos/${name}/${reponame}/readme`)
      .then((it) => atob(it.data.content))
      .then((readmd) => {
        dispatch({ type: READ_MD, readmd })
      })
  }
}
