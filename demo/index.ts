import { SalteAuth } from '@salte-auth/salte-auth';
import { Redirect } from '@salte-auth/redirect';
import { WSO2 } from '../src/wso2';

const auth = new SalteAuth({
  providers: [
    new WSO2({
      url: 'https://localhost:9443',

      clientID: '5h3_E8sO839B9DZBkJIOz9RVziQa'
    })
  ],

  handlers: [
    new Redirect({
      default: true
    })
  ]
});

const loginButton = document.createElement('button');
loginButton.innerHTML = `Login`;
loginButton.addEventListener('click', () => {
  auth.login('wso2');
});
document.body.appendChild(loginButton);

const logoutButton = document.createElement('button');
logoutButton.innerHTML = `Logout`;
logoutButton.addEventListener('click', () => {
  auth.logout('wso2');
});
document.body.appendChild(logoutButton);
