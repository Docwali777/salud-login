import React, { Component } from 'react'
import  { render } from 'react-dom'
import Auth0Lock from 'auth0-lock'
import Menu from './components/Navigation/navigation'
import {browserHistory} from 'react-router'

class Client extends Component {
static defaultProps = {
      clientID: 'MnRA94J210JSNDN3JPhoLb1FQxvydPTh',
    domain: 'drgauvin.auth0.com'

    // redirectUri: 'http://localhost:3000',
    // audience: 'https://drgauvin.auth0.com/userinfo',
    // responseType: 'token id_token',
    // scope: 'openid'
}

componentWillMount = () =>{
  this.lock = new Auth0Lock(this.props.clientID, this.props.domain)

  this.lock.on('authenticated', (authResult)=>{
    this.lock.getUserInfo(authResult.accessToken, (error, profile)=>{
      if(error){
        console.log(error);

      }
      console.log(profile)
          browserHistory.push('/')
      localStorage.setItem("accessToken", authResult.accessToken);
    localStorage.setItem("profile", JSON.stringify(profile));
    })

  })
}


showLock = () =>{
  this.lock.show()



}

  render(){
    return(
      <div className='text-center'>
        <Menu onLoginClick={this.showLock} />
      {this.props.children}
      </div>
    )
  }
}

export default Client
