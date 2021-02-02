const getData = async () => {
  const data = await fetch('https://chez-toi-api.herokuapp.com/', {
    mode: 'cors',
  }).then(response => response.json());

  return data;
};

export default getData;
