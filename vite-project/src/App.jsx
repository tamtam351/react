
import Food  from './components/Food'
import Card from './components/Card'
import Button from './components/Button/Button'
import Student from './components/Student'

function App() {
  

  return (
    <>
      {/* <Food/> */}
      <Card/>
      <Button/>
      <Student name ='David' age ={20} isStudent ={true}/>
      <Student name ='Doe' age ={20} isStudent ={false}/>
      <Student name ='Tamilore' age ={20} isStudent ={false}/>
      


    </>
  )
}

export default App
