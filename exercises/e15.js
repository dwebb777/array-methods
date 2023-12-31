import { data } from "../data/data"

// SPACE DATA EXERCISE 15
// Return an array of Planets' names without moons
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetsWithNoMoons(data) {
  let noMoons = []
  for (let i = 0; i < data.planets.length; i++) {
    if (!data.planets[i].moonsCount) {
      noMoons.push(data.planets[i].name)
    }
  }
  return noMoons
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-15"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
