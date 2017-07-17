import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators }from 'redux'
import validator from 'validator'
import { browserHistory} from 'react-router'



// import Auth from '../AuthO/auth';
//
// const auth = new Auth();
// auth.login();
//
// import validation from '../../../../Validation/validate'
//
// //actions
import {userRegistration} from '../../../actions/userAuth'
//
class Register extends Component{
constructor(props){
  super(props)

  this.state = {
    Username: '',
    Password: '',
    ConfirmPassword: '',
    Email: '',
    errors: {},
    noErrors: false,
    authErrorMessage: {},
    Date: new Date()
  }
}
//
// onChange =(e) =>{
//   this.setState({[e.target.name]: e.target.value})
// }
//
//
// submit =(e) =>{
//   e.preventDefault()
// this.setState({errors: validation(this.state),authErrorMessage: this.props.authErrorMessage , noErrors: true})
// }
//


  render(){
//
// if(Object.getOwnPropertyNames(this.state.errors).length === 0 && this.state.noErrors === true) {
//     this.props.userRegistration(this.state)
// }
//   let { message} = this.props
//   let {errors} = this.state
//
    return(
      <div>
        <button>Submit</button>
      </div>
//   <div className='container'>
//     <div className='page-header'>
//         <h1> Register </h1>
//     </div>
//
//     <form onSubmit={this.submit} >
//
// <div className={'form-group'}>
//   <label>Username</label>
//   <input
//       className='form-control'
//       name='Username'
//       type='text'
//       // value={this.state.Username}
//       placeholder='Enter Username'
//       onChange={this.onChange}
//   />
//   {message.message && <span>{message.message}</span> }
//   {errors.Username && <span>{errors.Username}</span>}
// </div>
//
// {/*  */}
//
// <div className='form-group'>
//   <label>Email</label>
//   <input
//       className='form-control'
//       name='Email'
//       type='text'
//       // value={this.state.Email}
//       placeholder='Enter Email'
//       onChange={this.onChange}
//   />
//   {errors.Email && <span>{errors.Email}</span>}
//
// </div>
//
// {/*  */}
//
// <div className='form-group'>
//   <label>Password</label>
//   <input
//       className='form-control'
//       name='Password'
//       type='password'
//       // value={this.state.Password}
//       placeholder='Enter Password'
//       onChange={this.onChange}
//   />
//   {errors.Password && <span>{errors.Password}</span>}
//
// </div>
//
// <div className='form-group'>
//   <label>ConfirmPassword</label>
//   <input
//       className='form-control'
//       name='ConfirmPassword'
//       type='password'
//       // value={this.state.ConfirmPassword}
//       placeholder='Enter ConfirmPassword'
//       onChange={this.onChange}
//   />
//   {errors.ConfirmPassword && <span>{errors.ConfirmPassword}</span>}
//
// </div>
//
//
// <button  className='btn btn-primary'>Submit</button>
//     </form>
//   </div>
    )
  }
}

function mapStateToProps(state){
  return {
    message: state.logUser
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    userRegistration
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)
