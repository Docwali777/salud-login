import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'drgauvin.auth0.com',
    clientID: 'MnRA94J210JSNDN3JPhoLb1FQxvydPTh',
    redirectUri: 'http://localhost:3000',
    audience: 'https://drgauvin.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}
