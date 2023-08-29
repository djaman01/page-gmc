import './sidebar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsProgress, faBolt } from '@fortawesome/free-solid-svg-icons'

import { courses } from './courses.js'

export default function Sidebarmap() {

  
  return (
    //<div> of all sidebar
    <div className='sidebar'>

      {/* div of 1st part of sidebar */}
      <div className='item1-sidebar'>
        <div className='progress'>
          <span>Course progress</span>
          <span>58%</span>
        </div>
        <FontAwesomeIcon icon={faBarsProgress} className='progress-bar' />
      </div>

      {/* div of 2nd part of sidebar */}
      <div className="item2-sidebar">
        <h4 className='curri'>Curriculum</h4>

        {/* Displaying all Subitems with map */}
        {courses.map(e => 
          <div>
          <span><FontAwesomeIcon icon={faBolt} className='boltsub' /></span> 
          <span>{e}</span>
          </div>)}
      </div>

    </div>
  )
}
