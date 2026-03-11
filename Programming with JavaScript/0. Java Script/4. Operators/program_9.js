//  9. Optional Chaining

let user = {
  profile: {
    name: "Shyam"
  }
};

console.log(user?.profile?.name);
console.log(user?.address?.city); // no crash
