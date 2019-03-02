import { combineReducers } from 'redux'
export const KEY = 'app'
export const NAME_SPACE = 'APP'

// State
const initialState = {
  isLoaded: false,
  status: {
    isLoading: false,
  }
}

// Actions
export const START_LOAD = `${NAME_SPACE}/START_LOAD`
export const END_LOAD_SUCCESS = `${NAME_SPACE}/END_LOAD_SUCCESS`
export const END_LOAD_FAILURE = `${NAME_SPACE}/END_LOAD_FAILURE`

// Reducers
function isLoadedReducer(
  state = initialState.isLoaded,
  action
) {
  switch (action.type) {
    case END_LOAD_SUCCESS:
      return true
    case END_LOAD_FAILURE:
      return false
    default:
      return state
  }
}

function statusReducer(
  state = initialState.status,
  {
    type,
    payload,
  }
) {
  switch (type) {
    case START_LOAD:
      return {
        pending: true,
        error: null,
      }
    case END_LOAD_SUCCESS:
      return initialState.status
    case END_LOAD_FAILURE:
      return {
        pending: false,
        error: payload.error,
      }
    default:
      return state
  }
}

export default combineReducers({
  isLoaded: isLoadedReducer,
  status: statusReducer,
})


// Selectors
export const isLoading = state => state[KEY].status.isLoading
export const isLoaded = state => state[KEY].isLoaded

// Action Creators
export const startLoad = () => ({
  type: START_LOAD,
})
export const endLoad = () => ({
  type: END_LOAD_SUCCESS,
})
export const endLoadFailure = () => ({
  type: END_LOAD_FAILURE,
})

// Side effects
export const startLoading = () => (dispatch) => {
  dispatch(startLoad())
  dispatch(endLoad())
}
