const jwt = require("jsonwebtoken");
class AuthService {
  isValid(token) {
    const decoded = jwt.decode(token);
    if (decoded) {
      if (Date.now() >= decoded.exp * 1000) return false;
      else return true;
    }
  }
  isAuthenticated() {
    const token = localStorage.getItem("access");
    return this.isValid(token);
  }
  getToken() {
    const token = localStorage.getItem("access");
    return token;
  }
  getId(){
	  let token = this.getToken()
	  const decoded = jwt.decode(token);
	return decoded.user_id
  }
}

export default new AuthService();
