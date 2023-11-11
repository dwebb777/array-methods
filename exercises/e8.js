import { data } from "../data/data"

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName) {
  let planetWithMoon = ""
  for (let i = 0; i < data.planets.length; i++) {
    if (data.planets[i].moons) {
      for (let j = 0; j < data.planets[i].moons.length; j++) {
        if (data.planets[i].moons[j] == moonName) {
          planetWithMoon += data.planets[i].name
        }
      }
    } else false
  }
  return planetWithMoon
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
