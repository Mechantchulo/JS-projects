//This example uses a lang property to set the value of the language property.
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(language) {
    this.language = language;
  }
};

// Set an object property using a setter:
person.lang = "en";

console.log(person.language);
