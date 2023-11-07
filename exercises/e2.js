import { data } from "../data/data"

// SPACE DATA EXERCISE 2
// Return an array of all Asteroids' names
// Return example: ['name1', 'name2', ... , 'nameN']

export function getAsteroidNames(data) {
  let nameOfAll = []
  for (let i = 0; i < data.asteroids.length; i++) {
    nameOfAll.push(data.asteroids[i].name)
  }
  return nameOfAll
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-2"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
