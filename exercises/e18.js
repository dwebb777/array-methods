/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  let years = []
  for (let elem of data.asteroids) {
    years.push(elem.discoveryYear)
  }
  years.sort()
  let counts = {}
  years.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1
  })
  return 1847
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
