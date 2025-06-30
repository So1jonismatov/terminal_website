import { useState, useRef, useEffect } from "react";
import commands from "./commands";

const Terminal = () => {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const endOfHistoryRef = useRef(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      let newHistory = [...history, { command: input, output: "" }];
      const command = input.trim().toLowerCase();
      const args = command.split(" ");
      const cmd = args[0];

      if (cmd in commands) {
        newHistory[newHistory.length - 1].output = commands[cmd];
      } else {
        if (cmd === "clear") {
          newHistory = [];
        } else {
          newHistory[newHistory.length - 1].output =
            `Command not found. try help`;
        }
      }

      setHistory(newHistory);
      setInput("");
    }
  };

  useEffect(() => {
    endOfHistoryRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <div
      className="w-full h-screen bg-black text-white font-mono p-4"
      onClick={() => document.getElementById("terminal-input").focus()}
    >
      {history.map((item, index) => (
        <div key={index}>
          <div>
            <span className="text-green-400">ronin:~$</span> {item.command}
          </div>
          <div>{item.output}</div>
        </div>
      ))}
      <div className="flex">
        <span className="text-green-400">ronin:~$&#10240;</span>
        <input
          id="terminal-input"
          type="text"
          className="bg-transparent border-none text-white w-full focus:outline-none"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          autoFocus
        />
      </div>
      <div ref={endOfHistoryRef} />
    </div>
  );
};

export default Terminal;
