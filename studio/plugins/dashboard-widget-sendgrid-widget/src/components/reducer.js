import {
  SHOW_CONFIRMATION,
  SHOW_SUCCESS,
  SHOW_ERROR,
  SEND_LOADING,
  GET_SANITY_DATA_REQUESTING,
  GET_SANITY_DATA_LOADED,
  GET_SANITY_DATA_ERROR,
  ERROR_REQUIRED,
  SET_STATE
} from './constants'

export const initialState = {
  dataRequesting: false,
  dataLoaded: false,
  dataError: false
}

const reducer = {
  [GET_SANITY_DATA_REQUESTING]: (state) => ({
    ...state,
    dataRequesting: true
  }),
  [GET_SANITY_DATA_LOADED]: (state, payload) => ({
    ...state,
    dataLoaded: true,
    dataRequesting: false,
    dataError: false,
    ...payload
  }),
  [GET_SANITY_DATA_ERROR]: (state) => ({
    ...state,
    dataLoaded: false,
    dataRequesting: false,
    dataError: true
  }),
  [SET_STATE]: (state, payload) => ({
    ...state,
    ...payload
  })
}

export default (state, {type, payload}) => reducer[type](state, payload)
