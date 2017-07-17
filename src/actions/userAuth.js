import axios from 'axios'


export function userRegistration(user){
  return (dispatch) =>{
    return  axios.post('/api/user', user)
      .then(res =>{
          console.log('AXIOS', res);
        dispatch({
          type:'REGISTER_USER',
          payload: res.data
        })
      })
      .catch(err =>{
        console.log('AXIOs',err);
        dispatch({
          type: 'USER_NOT_REGISTERED',
          payload: 'User not registered'
        })
      })

}
}
