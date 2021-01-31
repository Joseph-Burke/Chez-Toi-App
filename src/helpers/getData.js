const getData = async () => {
  const users = await fetch("http://localhost:3000", {
    mode: "cors"
  }).then(response => response.json());
  return users;
}

export default getData;