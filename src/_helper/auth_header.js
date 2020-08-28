export function authHeader () {
  let user = JSON.parse(localStorage.getItem("user"))

  if (user && user.token){
    return {'Authorization': "nice "+ user.token}
  } else {
    return {};
  }
}
