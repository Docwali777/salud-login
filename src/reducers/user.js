export default function logUser(state = {user: [] }, action){
  switch(action.type){
      case 'REGISTER_USER':
      const newUser =  {...state}
      newUser.user = action.payload
      return newUser
      break;

      case "USER_NOT_REGISTERED":
      const userNotRegistered = {...state}
      console.log(action.payload);
        userNotRegistered.message = action.payload
return userNotRegistered
break;

default: return state
}
return state
}
