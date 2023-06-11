import classnames from 'classnames';
import { Link } from 'react-router-dom';
function SideBar({subjects,markingSchemes,answerPapers,mcq,clicked}) {

  const classes = classnames('cursor-pointer py-3 hover:bg-sky-300 rounded rounded-lg');

  let navbarclasses;

  if(clicked=="outer"){
    navbarclasses = classnames('text-white font-bold text-center flex flex-col justify-between sidebar w-52 bg-sky-600 outer px-2')
  }else if(clicked=="inner"){
    navbarclasses = classnames('text-white font-bold text-center flex flex-col justify-between sidebar w-52 bg-sky-600 inner px-2')
  }

  return (
    <div className={navbarclasses}>
      <div className=" pb-4">
        {subjects && <div className={classes}><Link to="/subjects">Subjects</Link></div>}
        {markingSchemes && <div className={classes}><Link to="/markingschemes">Marking Schemes</Link></div>}
        {answerPapers && <div className={classes}><Link to="/answerpapers">Answer Papers</Link></div>}
        {mcq && <div className={classes}><Link to="/mcq">MCQ</Link></div>}
      </div>
      <div className={classes}>Logout</div>
    </div>
  )
}

export default SideBar
