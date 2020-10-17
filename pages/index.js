import Head from 'next/head';
import { useState } from 'react'
import { HomeContainer, TimerBox, Timer } from '../styles/home'

export default function Home() {
  const [timer, setTimer] = useState(25);
  return (
    <HomeContainer>
      <TimerBox>
        <div>
          <a>Pomodoro</a>
          <a>Short Break</a>
          <a>Long Break</a>
        </div>

        <Timer>25:00</Timer>

        <button>Start</button>
      </TimerBox>
    </HomeContainer>
  )
}
