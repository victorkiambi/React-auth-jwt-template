
const user = JSON.parse(localStorage.getItem('user'));


class AuthHeader {

    authHeader(){
        if (user && user.accessToken) {
            return { Authorization: 'Bearer ' + user.accessToken };
        }
        else {
            return {};
        }
    }

}
export default new AuthHeader();
