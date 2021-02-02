import logIn from './logIn';

const signUp = async params => {
  const paramsString = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&');

  await fetch(`https://chez-toi-api.herokuapp.com/users?${paramsString}`, {
    method: 'POST',
    mode: 'cors',
  })
    .then(response => response.json())
    .then(obj => logIn(obj.email));
};

export default signUp;
