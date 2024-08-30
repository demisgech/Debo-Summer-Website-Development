function createUser(username, password) {
  const user = {
    username: username,
    password: password,
    login() {
      console.log("Login");
    },
    signup: function () {
      console.log("Sign up");
    },
  };
  return user;
}

const userOne = createUser("Demis", "1234");
// console.log(userOne);

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.login = function () {
      console.log("Login  as " + this.username);
    };
    this.signup = function () {
      console.log("Sign up");
    };
  }

  logger() {
    console.log("Logger");
  }
}

// function User(username, password) {
//   this.username = username;
//   this.password = password;
//   this.login = function () {
//     console.log("Login  as " + this.username);
//   };
//   this.signup = function () {
//     console.log("Sign up");
//   };

//   Object.prototype.logger = function() {
//     console.log('Logger');
//   }

// }
const userTwo = new User("Demis", "1234");
// console.log(userTwo);

// userTwo.login();

class Person {
  firstName;
  lastName;
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  setFullName(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName} `;
  }
}

const person = new Person("Demis", "Getachew");
// let fullName = person.getFullName();
// console.log(fullName);

// person.setFullName("Dereje", "Tesfaye");
// fullName = person.getFullName();
// console.log(fullName);

// person.firstName = "Alemu";

// fullName = person.getFullName();
// console.log(fullName);

// person.getFullName();

class Student extends Person {
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }

  // Method overriding
  // Function overriding

  getFullName() {
    return ` Student ${this.firstName} ${this.lastName}`;
  }
}

class Professor extends Person {
  constructor(firstName, lastName, favoriteColor) {
    super(firstName, lastName);
    this.favoriteColor = favoriteColor;
  }
  getFullName() {
    return ` Professor ${this.firstName} ${this.lastName}`;
  }
}

const student = new Student("Demis", "Getachew");
student.setFullName("Dereje", "Tesfaye");
const studentFullName = student.getFullName();

console.log(studentFullName);

const professor = new Professor("Alemu", "Kebede", "Blue");

const professorFullName = professor.getFullName();
console.log(professorFullName);
