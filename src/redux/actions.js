import ajax from '../ajax'

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const GETPERSON = 'GETPERSON'
export const ADDPERSON = 'ADDPERSON'
export const MODPERSON = 'MODPERSON'
export const DELPERSON = 'DELPERSON'

export const incrementValue = () => ({
  type: INCREMENT
})

export const decrementValue = () => ({
  type: DECREMENT
})

export const resetValue = () => ({
  type: RESET
})

export const getPerson = (dispatch) => {
  return async () => {
    try {
      const res = await ajax('/api/user-data');
      dispatch({
        type:GETPERSON,
        data:res
      })
      return res
    } catch (err) {
      console.log(err);
    }
  }
}

export const addPerson = async data => {
  try {
    const res = await ajax('/api/user-add', data)
    return {
      type: ADDPERSON,
      data: res
    }
  } catch (err) {
    console.log(err)
  }
}

export const modPerson = async data => {
  try {
    const res = await ajax('/api/user-mod', data)
    return {
      type: MODPERSON,
      data: res
    }
  } catch (err) {
    console.log(err)
  }
}

export const delPerson = async data => {
  try {
    const res = await ajax('/api/user-del', { id: data })
    return {
      type: DELPERSON,
      data: res
    }
  } catch (err) {
    console.log(err)
  }
}