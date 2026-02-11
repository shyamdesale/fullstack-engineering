//  13. Class + Types (advanced usage)

class User {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  greet(){
    console.log(`Hi ${this.name}`);
  }
}

const u = new User("Shyam", 21);
u.greet();
