import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    // If there is a token and it's not expired, return `true`
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token) {
    // Decode the token to get its expiration time that was set by the server
    const decoded = decode(token);
    // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('id_token');
      return true;
    }
    // If token hasn't passed its expiration time, return `false`
    return false;
  }

  getToken() {
    return localStorage.getItem('id_token');
  }


  login(idToken, role) {
    localStorage.setItem('id_token', idToken);

    // Redirect based on the user's role
    if (role === 'candidate') {
      window.location.href = '/candidate';
    } else if (role === 'employer') {
      window.location.href = '/employer';
    } else {
      // Handle any other roles or cases here
      window.location.href = '/'; 
    }
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.href = '/login'; // Redirect to the login page
  }
}

export default new AuthService();
