
import Food  from './components/Food'
import Card from './components/Card'
import Button from './components/Button/Button'
import Student from './components/Student'
import UserGreeting from './components/UserGreeting'
import List2 from './components/List2'
import Click2 from './components/Click2.jsx'
import Mycomponent2 from './components/Mycomponent2'
import Classwork from './components/Classwork.jsx'


function App() {
  

  return (
    <>
      {/* <Food/>
      <Card/>
      <Button/>
      <Student name ='David' age ={20} isStudent ={true}/>
      <Student name ='Doe' age ={20} isStudent ={false}/>
      <Student name ='Tamilore' age ={20} isStudent ={false}/>
       */}
       

       <UserGreeting isLoggedIn={true}  username='Dave'/>
        <List2/>
        <Click2/>
        <Mycomponent2/>

        <br />
        <br />
        <Classwork/>
       

    </>
  )
}

export default App
