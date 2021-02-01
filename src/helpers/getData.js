const getData = async () => {
  const data = await fetch('http://localhost:3000', {
    mode: 'cors',
  }).then(response => response.json());

  return data;
};

export default getData;
