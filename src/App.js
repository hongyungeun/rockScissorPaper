import logo from './logo.svg';
import './App.css';
import Box from './component/Box';
import rock from './img/rock.jpg'
import scissors from './img/scissor.png'
import paper from './img/paper.png'
import { useState } from 'react';
const choice ={
  rock:{
    name:"Rock",
    src:rock
  },
  scissors:{
    name:"Scissors",
    src:scissors
  },
  paper:{
    name:"Paper",
    src:paper
  }
}
function App() {
  const [userSelect,setUserSelect] = useState('')
  const [computerSelect,setCoputerSelect] = useState('')
  const [result,setResult] = useState('')
  const [comResult, setComResult] = useState('')
  const play=(userChoice)=>{
    setUserSelect(choice[userChoice]) 
    let computerChoice = randomChoice()
    setCoputerSelect(computerChoice)
    setResult(judgement(choice[userChoice],computerChoice))
    let judReult = judgement(choice[userChoice],computerChoice)
    let computerResult = ()=>{
      if(judReult == 'tie'){
        return 'tie'
      }else if (judReult == 'win'){
        return 'lose'
      }else if (judReult == 'lose'){
        return 'win'
      }
    }
    setComResult(computerResult)
  }
  const judgement =(user,computer)=>{
    if(user.name == computer.name){
      return 'tie'
    }else if(user.name == 'Rock'){
      return computer.name == 'Scissors' ? 'win' : 'lose'
    }else if(user.name == 'Scissors'){
       return computer.name == 'Paper' ? 'win' : 'lose'
    }else if(user.name == 'Paper') {
      return computer.name == "Rock" ? "win" : 'lose'
    }else{
      console.log('hi')
    }
    
  }
  const randomChoice=()=>{
    let itemArray = Object.keys(choice) //객체에 키값만 뽑아서 어레이로 만들어줌
    let randomItem = Math.floor(Math.random()* itemArray.length) 
    let final = itemArray[randomItem]
    return choice[final]
  }
  return (
    <>
    <div className="App">
      <Box title='You' item={userSelect} result={result} />
      <Box title='Computer' item={computerSelect} result={comResult} />
    </div>
      <div className='btn_wrap'>
        <button onClick={()=>play('scissors')}>가위</button>
        <button onClick={()=>play('rock')}>바위</button>
        <button onClick={()=>play('paper')}>보</button>
      </div>
    </>
  );
}

export default App;
