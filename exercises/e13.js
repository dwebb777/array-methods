import { data } from "../data/data"

// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

export function getAveragePlanetsTemperature(data) {
  let avgTempAll
  let sum = 0
  for (let i = 0; i < data.planets.length; i++) {
    sum += data.planets[i].avgTemp
  }
  avgTempAll = sum / data.planets.length
  return avgTempAll
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
