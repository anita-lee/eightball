import EightBall from './EightBall';

/** Creates the container for EightBall.
 *
 * @param {arr} [{ msg: "It is certain.", color: "green" },
 *               { msg: "It is decidedly so.", color: "green" },
 *              ...]
 * @return {jsx}
 */
function App() {
  return (
    <div>
      <EightBall />
    </div>
  );
}

export default App;
