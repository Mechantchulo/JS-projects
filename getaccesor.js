//This example uses a lang property to get the value of the language property.
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language;
  }
};

console.log(person.lang);