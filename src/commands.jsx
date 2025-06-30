import Draggable from "./Draggable";
import Neofetch from "./Neofetch";
const commands = {
  help: (
    <>
      <h1>Available Commands:</h1>
      <ul>
        <li key="1">whoami - gives you info about me </li>
        <li key="2">gwhoami - gives you info about me in graphical app </li>
        <li key="3">neofetch - gives you info about my computer </li>
        <li key="4">
          projects - gives you info about projects i have done so far.
        </li>
      </ul>
    </>
  ),
  whoami: (
    <>
      <h1>Hi, I'm Ronin</h1>
      <h6>I'm just a Vagabond, Ordinary Joe, you name it</h6>
      <p>thinking of programming.....</p>
    </>
  ),
  gwhoami: (
    <Draggable title={"My Metaphysics"}>
      <span className="text-blue-950 p-0.5 text-center">
        <h1>Hi, I'm Ronin</h1>
        <h6>I'm just a Vagabond, Ordinary Joe, you name it</h6>
        <p>thinking of programming.....</p>
      </span>
    </Draggable>
  ),
  neofetch: <Neofetch />,
  projects: (
    <>
      <p>this shit is still in construction</p>
    </>
  ),
};

export default commands;
