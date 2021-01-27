const getData = async () => {
  const users = await fetch("https://bind-date-api.herokuapp.com/users", {
    mode: "cors"
  }).then(response => response.json());
  return users;
}

export default getData;