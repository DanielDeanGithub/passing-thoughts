import React, { useEffect } from 'react';

export function Thought(props) {
  const { thought, removeThought  } = props;

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  useEffect(() => {
    // calculates remaining time
    const timeRemaining = thought.expiresAt - Date.now();
    // `timer` displays alert after timeRemaining expires
    const timer = setTimeout(() => {
      alert('Time has passed!');
    }, timeRemaining);
    // return function that removes `timer` to clean up effect
    return () => clearTimeout(timer);
    // [thought] added as dependency to re-run effect every time `thought` is different
  }, [thought]);

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}
