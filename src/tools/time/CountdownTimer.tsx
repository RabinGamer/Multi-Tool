'use client';

import { Pause, Play, RotateCcw } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

function pad(n: number): string {
  return String(Math.max(0, n)).padStart(2, '0');
}

export default function CountdownTimer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [remaining, setRemaining] = useState(5 * 60);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const targetRef = useRef<number>(0);

  const fieldSeconds = Math.max(0, hours) * 3600 + Math.max(0, minutes) * 60 + Math.max(0, seconds);

  useEffect(() => {
    if (!running) setRemaining(fieldSeconds);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hours, minutes, seconds]);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      const left = Math.max(0, Math.round((targetRef.current - Date.now()) / 1000));
      setRemaining(left);
      if (left <= 0) {
        setRunning(false);
        setDone(true);
      }
    }, 250);
    return () => window.clearInterval(id);
  }, [running]);

  function start() {
    if (fieldSeconds <= 0 && remaining <= 0) return;
    if (done) {
      setDone(false);
      setRemaining(fieldSeconds);
      targetRef.current = Date.now() + fieldSeconds * 1000;
      setRunning(true);
      return;
    }
    targetRef.current = Date.now() + remaining * 1000;
    setRunning(true);
  }

  function pause() {
    setRunning(false);
  }

  function reset() {
    setRunning(false);
    setDone(false);
    setRemaining(fieldSeconds);
  }

  const displayHours = Math.floor(remaining / 3600);
  const displayMinutes = Math.floor((remaining % 3600) / 60);
  const displaySeconds = remaining % 60;

  return (
    <div className="card p-4 sm:p-6">
      <div
        className={cn(
          'rounded-2xl border p-10 text-center transition-colors',
          done
            ? 'border-indigo-500/50 bg-indigo-500/10 animate-glow-pulse'
            : 'border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950'
        )}
        aria-live="polite"
      >
        <p
          className={cn(
            'font-mono text-6xl font-bold tabular-nums tracking-tight sm:text-8xl',
            done && 'text-indigo-500 dark:text-indigo-300'
          )}
        >
          {pad(displayHours)}:{pad(displayMinutes)}:{pad(displaySeconds)}
        </p>
        <p className="mt-3 text-sm font-medium text-zinc-400 dark:text-zinc-500">
          {done ? 'Time is up!' : running ? 'Counting down...' : 'Ready when you are'}
        </p>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {[
          { label: 'Hours', value: hours, set: setHours, max: 99 },
          { label: 'Minutes', value: minutes, set: setMinutes, max: 59 },
          { label: 'Seconds', value: seconds, set: setSeconds, max: 59 },
        ].map((f) => (
          <label key={f.label} className="text-sm font-medium">
            <span className="mb-1.5 block">{f.label}</span>
            <input
              type="number"
              min={0}
              max={f.max}
              value={f.value}
              disabled={running}
              onChange={(e) =>
                f.set(Math.max(0, Math.min(f.max, Number(e.target.value) || 0)))
              }
              className="input disabled:opacity-50"
            />
          </label>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {running ? (
          <button type="button" onClick={pause} className="btn-primary">
            <Pause className="h-4 w-4" />
            Pause
          </button>
        ) : (
          <button type="button" onClick={start} className="btn-primary">
            <Play className="h-4 w-4" />
            Start
          </button>
        )}
        <button type="button" onClick={reset} className="btn-ghost">
          <RotateCcw className="h-4 w-4" />
          Reset
        </button>
      </div>
    </div>
  );
}
