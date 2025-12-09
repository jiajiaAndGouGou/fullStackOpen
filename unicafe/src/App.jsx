import { useState } from 'react'

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>
}

const Statistics = (props) => {
  if(props.all === 0) return (
    <div>
      <p>No feedback given</p>
    </div>
  )
  else return(
  <table>
    <tbody>
    <StatisticLine text="good" value={props.good} />
    <StatisticLine text="neutral" value={props.neutral} />
    <StatisticLine text="bad" value={props.bad} />
    <StatisticLine text="all" value={props.all} />
    <StatisticLine text="average" value={props.average} />
    <StatisticLine text="positive" value={props.positive} />
    </tbody>
  </table>
  )
   
}

const StatisticLine = (props) => {
  return <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
    </tr>
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const gC = () => setGood(good + 1)
  const nC = () => setNeutral(neutral + 1)
  const bC = () => setBad(bad + 1)

  const all = good + neutral + bad
  const average = all > 0 ? (good - bad) / all : 0
  const positive = all > 0 ? (good / all)*100 : 0

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={gC} text = 'good'/>
      <Button onClick={nC} text = 'neutral'/>
      <Button onClick={bC} text = 'bad'/>
      <h1>statistics</h1>
      <Statistics 
      good = {good}
      neutral = {neutral}
      bad = {bad}
      all = {all}
      average = {average}
      positive = {positive}
      />
    </div>
  )
}

export default App