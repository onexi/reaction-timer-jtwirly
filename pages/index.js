import { useState, useEffect } from 'react';

export default function Home() {
  const [status, setStatus] = useState('waiting'); // 'waiting', 'ready', 'clicked', 'tooEarly'
  const [message, setMessage] = useState('Click start to begin the test!');
  const [startTime, setStartTime] = useState(null);
  const [reactionTime, setReactionTime] = useState(null);
  const [fastestTime, setFastestTime] = useState(null);
  const [cooldown, setCooldown] = useState(false);

  const handleStart = () => {
    if (cooldown) {
      setMessage('Cooldown active, please wait...');
      return;
    }
    
    setMessage('Wait for the color to change...');
    setStatus('waiting');
    const randomDelay = Math.random() * 19000 + 1000;

    setTimeout(() => {
      setStatus('ready');
      setMessage('Click the stop button!');
      setStartTime(new Date().getTime());
    }, randomDelay);
  };

  const handleStop = async () => {
    if (status === 'ready') {
      const reaction = new Date().getTime() - startTime;
      setReactionTime(reaction);
      setMessage(`Your reaction time: ${reaction} ms`);

      // Send reaction time to server
      const response = await fetch('/api/time', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ time: reaction }),
      });

      const result = await response.json();
      setFastestTime(result.fastestTime);
      setMessage(`Your reaction time: ${reaction} ms\nFastest time: ${result.fastestTime} ms`);
      setStatus('clicked');
    } else if (status === 'waiting') {
      setMessage('Too early! Wait for the color to change.');
      setStatus('tooEarly');
      setCooldown(true);
      setTimeout(() => {
        setCooldown(false);
        setMessage('Try again.');
      }, 5000); // 5 seconds cooldown
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Reaction Timer</h1>
      <button onClick={handleStart} disabled={status === 'ready'}>
        Start
      </button>
      <button
        onClick={handleStop}
        style={{ backgroundColor: status === 'ready' ? 'green' : 'grey', marginLeft: '10px' }}
        disabled={status !== 'ready'}
      >
        Stop
      </button>
      <p>{message}</p>
      {reactionTime && <p>Your time: {reactionTime} ms</p>}
      {fastestTime && <p>Fastest time: {fastestTime} ms</p>}
    </div>
  );
}
