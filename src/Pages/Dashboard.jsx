import NavBar from '../Components/NavBar'
import SideBar from '../Components/SideBar'
import {useState} from 'react'
function Dashboard() {

  const [isClicked,setClick] = useState("outer")

  //Function to handle the click of the hamburger menu
  const handleClick = () => {
    if(isClicked=="outer"){
    setClick("inner")
    }else{
    setClick("outer")
    }
  }

  return (
    <div>
      <NavBar black onClickFunc={handleClick}/>
      {isClicked ? <SideBar mcq subjects markingSchemes answerPapers clicked={isClicked}/> : <SideBar mcq subjects markingSchemes answerPapers inner/>}
    </div>
  )
}

export default Dashboard
