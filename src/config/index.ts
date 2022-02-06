import development from './development';
import local from './local';
import production from './production';
import staging from './staging';

if (!process.env.REACT_APP_ENV) {
  throw Error('REACT_APP_ENV should be provided');
}

export default {
  local,
  development,
  staging,
  production,
}[process.env.REACT_APP_ENV];
