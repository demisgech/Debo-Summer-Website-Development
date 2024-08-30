// Factory function
 function createUser(username, password) {
  const user = {
    username: username,
    password: password,
    login: function () {
      console.log("login");
    },
    singup() {
      console.log("Sign up!");
    },
  };
  return user;
}

const userOne = createUser("@demisgech", "1234");
console.log(userOne);

const userTwo = createUser("@logger", "logger");
console.log(userTwo);

function User(username, password) {
  this.username = username;
  this.password = password;
  this.login = function () {
    console.log("Login");
  };
  this.signup = function () {
    console.log("sign up");
  };
}

const userThree = new User("@demis", "demis");
console.log(userThree);
