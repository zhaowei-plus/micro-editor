const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_ACTIVE': {
      console.log('active SET_ACTIVE:', payload)
      return payload
    }

    case 'DEL_ACTIVE': {
      console.log('widgets DEL_WIDGET:', payload)
      return initialState
    }

    default: {
      return state
    }
  }
}
