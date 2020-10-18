import { useState, useEffect } from 'react'
import { HomeContainer, TimerBox, Timer } from '../styles/home'
import moment from 'moment'

export default function Home() {
  const [counter, setCounter] = useState({ minutes: 25, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      if (counter.seconds === 0) {
        setCounter({
          minutes: counter.minutes - 1,
          seconds: 59
        })
      } else {
        setCounter({
          minutes: counter.minutes,
          seconds: counter.seconds - 1
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [counter]);

  return (
    <HomeContainer>
      <TimerBox>
        <div>
          <a>Pomodoro</a>
          <a>Short Break</a>
          <a>Long Break</a>
        </div>

        <Timer>{`${counter.minutes}:${counter.seconds}`}</Timer>

        <button>Start</button>
      </TimerBox>
    </HomeContainer>
  )
}
