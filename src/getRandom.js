/** Generate a random number
 * @param {num} 5
 * @returns{num} random number
 */

//TODO: get a random choice (pass in array)
function getRandom(length) {
  return (Math.floor(Math.random() * (length + 1)));
}

export { getRandom };
