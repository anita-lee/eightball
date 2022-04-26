import './EightBall.css';
import React, { useState } from "react";
import { getRandom } from './getRandom';

const defaultAnswers = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];

/** Create content for EightBall.
 *TODO: describe with examples versus descriptive text below.
 * look at solution for more ideas for return
 * @param {arr} [{ msg: "It is certain.", color: "green" },
 *               { msg: "It is decidedly so.", color: "green" },
 *              ...]
 * @returns {jsx}
 */

function EightBall({ answers = defaultAnswers }) {
  const [color, setColor] = useState("black");
  const [msg, setMsg] = useState("Think of a Question");

  function handleClick() {
    const idx = getRandom(answers.length);
    //TODO: setAnswer to combine both states into a mono-state.
    setColor(answers[idx].color);
    setMsg(answers[idx].msg);
  }

  return (
    <>
      <button
        className="EightBall-button"
        style={{ backgroundColor: color }}
        onClick={handleClick}
      >{msg}</button>
    </>
  );
}
//TODO: Explore defaultProps syntax.

export default EightBall;