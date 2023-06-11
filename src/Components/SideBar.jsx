import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { BsFillBookFill,BsBookmarksFill } from "react-icons/bs";
import { BiAlarmOff,BiLogOut } from "react-icons/bi";
import { MdSubject,MdSettings } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import {useState} from 'react';
function SideBar({subjects,markingSchemes,answerPapers,mcq,clicked}) {

  const [isClicked,setClick] = useState(false)

  const classes = classnames('shadow shadow-gray-600 flex flex-col items-center justify-center cursor-pointer py-4 hover:bg-sky-300');
  const bottomclasses = classnames('flex flex-col items-center justify-center cursor-pointer py-4');

  let navbarclasses;

  if(clicked=="outer"){
    navbarclasses = classnames('text-white font-bold text-center flex flex-col justify-between sidebar w-52 bg-sky-600 outer pt-1')
  }else if(clicked=="inner"){
    navbarclasses = classnames('text-white font-bold text-center flex flex-col justify-between sidebar w-52 bg-sky-600 inner pt-1 max-sm:w-14')
  }

  //When logout button clicked
  const handleSubmit = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  }

  const handleClick = () => {
    setClick(!isClicked)
  }

  return (
    <div className={navbarclasses}>
      <div className=" pb-4">
        {subjects && <div className={classes}><Link to="/subjects" className='flex items-center'><div className='mr-1 hidden max-sm:block max-sm:text-3xl'><MdSubject/></div><div className='max-sm:hidden'>Subjects</div></Link></div>}
        {markingSchemes && <div className={classes}><Link to="/markingschemes" className='flex items-center'><div className='mr-1 hidden max-sm:block max-sm:text-3xl'><BsFillBookFill/></div><div className='max-sm:hidden'>Marking Schemes</div></Link></div>}
        {answerPapers && <div className={classes}><Link to="/answerpapers" className='flex items-center'><div className='mr-1 hidden max-sm:block max-sm:text-3xl'><BiAlarmOff/></div><div className='max-sm:hidden'>Answer Papers</div></Link></div>}
        {mcq && <div className={classes}><Link to="/mcq" className='flex items-center'><div className='mr-1 hidden max-sm:block max-sm:text-3xl'><BsBookmarksFill/></div><div className='max-sm:hidden'>MCQ</div></Link></div>}
      </div>
      <div className={bottomclasses}>
        {isClicked && 
        <div className='w-full bg-sky-400'>
          <Link to="/profile" className='shadow shadow-gray-600 flex justify-center hover:bg-sky-300 w-full py-4'><div className='mr-1 hidden max-sm:block max-sm:text-3xl'><CgProfile/></div><div className='max-sm:hidden'>Profile</div></Link>
          <Link to="/settings" className='shadow shadow-gray-600 flex justify-center hover:bg-sky-300 w-full py-4'><div className='mr-1 hidden max-sm:block max-sm:text-3xl'><MdSettings/></div><div className='max-sm:hidden'>Settings</div></Link>
          <button onClick={handleSubmit} className='shadow shadow-gray-600 flex justify-center hover:bg-sky-300 w-full py-4'><div className='mr-1 hidden max-sm:block max-sm:text-3xl'><BiLogOut/></div><div className='max-sm:hidden'>Logout</div></button>
        </div> }
        <button onClick={handleClick} className='shadow shadow-gray-600 flex justify-center hover:bg-sky-300 w-full py-4 text-3xl bg-sky-400'><CgProfile/></button>
      </div>
    </div>
  )
}

export default SideBar
