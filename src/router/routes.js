import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import CompleteRegistration from '../components/CompleteRegistration/CompleteRegistration';
import EmailConfirmation from '../components/EmailConfirmation/EmailConfirmation';
import PasswordReset from '../components/PasswordReset/PasswordReset';
import Error404 from '../components/Error404/Error404';

// export default [
export const routes = [
  { path: '/', component: Login, name: 'home' },
  { path: '/login', component: Login, name: 'login' },
  { path: '/register', component: Register, name: 'register' },
  { path: '/complete-registration', component: CompleteRegistration, name: 'completeregistration' },
  { path: '/email-confirmation', component: EmailConfirmation, name: 'emailconfirmation' },
  { path: '/password-reset', component: PasswordReset, name: 'passwordreset' },
  { path: '*', component: Error404 }
];