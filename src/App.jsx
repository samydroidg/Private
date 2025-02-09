import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [fontSize, setFontSize] = useState(24);
  const [hearts, setHearts] = useState([]);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    if (accepted) {
      spawnHearts();
    }
  }, [accepted]);

  const acceptProposal = () => {
    setAccepted(true);
  };

  const rejectProposal = () => {
    setFontSize((prevSize) => prevSize * 1.15);
  };

  const spawnHearts = () => {
    let newHearts = [];
    for (let i = 0; i < 20; i++) {
      let x, y;
      do {
        x = Math.random() * window.innerWidth;
        y = Math.random() * window.innerHeight;
      } while (y < 100);
      newHearts.push({ x, y, id: i });
    }
    setHearts(newHearts);
  };

  return (
    <div className="container">
      {!accepted ? (
        <>
          <h1 className="title">Will you be my forever love? ❤️</h1>
          <div className="buttons">
            <button
              className="accept"
              style={{ fontSize: fontSize, padding: `${fontSize / 2}px ${fontSize}px` }}
              onClick={acceptProposal}
            >
              Yes, of course! 💖
            </button>
            <button className="reject" onClick={rejectProposal}>No (but you can't 😆)</button>
          </div>
        </>
      ) : (
        <h1 className="title">Yay! ❤️ I love you too! 💖</h1>
      )}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart"
          style={{ left: heart.x, top: heart.y }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default App
