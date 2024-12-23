import React, { useState, useEffect } from 'react';

function DependencyDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // 1. useEffect with no dependencies (runs after every render)
  useEffect(() => {
    console.log('Effect with no dependencies: Runs on every render');
  });

  // 2. useEffect with an empty dependency array (runs only on mount and unmount)
  useEffect(() => {
    console.log('Effect with empty dependencies: Runs only on mount');
    return () => {
      console.log('Cleanup for empty dependencies: Runs on unmount');
    };
  }, []);

  // 3. useEffect with a dependency array containing `count` (runs when `count` changes)
  useEffect(() => {
    console.log(`Effect with count as dependency: Count is ${count}`);
  }, [count]);

  // 4. useEffect with multiple dependencies (`count` and `text`)
  useEffect(() => {
    console.log(`Effect with multiple dependencies: Count is ${count}, Text is "${text}"`);
  }, [count, text]);

  return (
    <div>
      <h1>useEffect Dependency Demo</h1>
      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount((prev) => prev + 1)}>Increase Count</button>
        <button onClick={() => setCount((prev) => prev)}>Set Same Count</button>
      </div>
      <div>
        <h2>Text: {text}</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
        />
      </div>
    </div>
  );
}

export default DependencyDemo;
