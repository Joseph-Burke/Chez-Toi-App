const getURL = houseId => {
  const prefix = 'https://chez-toi-api.herokuapp.com';
  return `${prefix}/houses/${houseId}/picture`;
};

export default getURL;
