const john = {
  name: 'John',
  surname: 'Doe',
  age: 30,
  hobbies: ['Surf', 'Design'],
}

const jane = {
  ...john,
  name: 'Jane',
  hobbies: john.hobbies.concat('Surf', 'Design'),
}

console.log('John:', john)
console.log('Jane:', jane)
