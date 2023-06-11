//if validation needs to be called before any more api call use this:
//Validating
const validate = async () => {
  const res = await fetch("http://localhost:3009/api/v1/validate", {
    method: "GET",
    credentials: "include",
  });
};
//   const data = await res.json();
