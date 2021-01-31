const getURL = (houseId) => {
  const prefix = "http://localhost:3000";
  return `${prefix}/houses/${houseId}/picture`;
};

export default getURL;