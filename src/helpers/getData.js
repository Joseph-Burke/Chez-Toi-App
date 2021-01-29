const getData = async () => {
  const users = await fetch("https://bind-date-api.herokuapp.com/", {
    mode: "cors"
  }).then(response => response.json());
  return users;
}

export default getData;