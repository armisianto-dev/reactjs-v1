export const auth = {
  isLogin
}

function isLogin() {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem('user'));

  if (user) {
    return true;
  } else {
    return false;
  }
}