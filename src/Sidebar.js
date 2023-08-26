import './App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsProgress, faBolt } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar() {
  return (
    <div className='sidebar'>

      <div className='item1-sidebar'>
        <div className='progress'>
          <span>Course progress</span>
          <span>58%</span>
        </div>
        <FontAwesomeIcon icon={faBarsProgress} className='progress-bar' />
      </div>

      <div className="item2-sidebar">
        
        <h4 className='curri'>Curriculum</h4>

        <div className="subitem">
          <FontAwesomeIcon icon={faBolt} className='bolt' />
          <span className="sidebar-title">Web fundamentals</span>
        </div>

        <div className="subitem">
          <FontAwesomeIcon icon={faBolt} className='bolt' />
          <span className="sidebar-title">Web fundamentals</span>
        </div>

        <div className="subitem">
          <FontAwesomeIcon icon={faBolt} className='bolt' />
          <span className="sidebar-title">Web fundamentals</span>
        </div>

        <div className="subitem">
          <FontAwesomeIcon icon={faBolt} className='bolt' />
          <span className="sidebar-title">Web fundamentals</span>
        </div>

        <div className="subitem">
          <FontAwesomeIcon icon={faBolt} className='bolt' />
          <span className="sidebar-title">Web fundamentals</span>
        </div>

        <div className="subitem">
          <FontAwesomeIcon icon={faBolt} className='bolt' />
          <span className="sidebar-title">Web fundamentals</span>
        </div>

        <div className="subitem">
          <FontAwesomeIcon icon={faBolt} className='bolt' />
          <span className="sidebar-title">Web fundamentals</span>
        </div>

        <div className="subitem">
          <FontAwesomeIcon icon={faBolt} className='bolt' />
          <span className="sidebar-title">Web fundamentals</span>
        </div>

        <div className="subitem">
          <FontAwesomeIcon icon={faBolt} className='bolt' />
          <span className="sidebar-title">Web fundamentals</span>
        </div>

        <div className="subitem">
          <FontAwesomeIcon icon={faBolt} className='bolt' />
          <span className="sidebar-title">Web fundamentals</span>
        </div>

        <div className="subitem">
          <FontAwesomeIcon icon={faBolt} className='bolt' />
          <span className="sidebar-title">Web fundamentals</span>
        </div>

        <div className="subitem">
          <FontAwesomeIcon icon={faBolt} className='bolt' />
          <span className="sidebar-title">Web fundamentals</span>
        </div>

        <div className="subitem">
          <FontAwesomeIcon icon={faBolt} className='bolt' />
          <span className="sidebar-title">Web fundamentals</span>
        </div>

        <div className="subitem">
          <FontAwesomeIcon icon={faBolt} className='bolt' />
          <span className="sidebar-title">Web fundamentals</span>
        </div>

        
        <div className="subitem">
          <FontAwesomeIcon icon={faBolt} className='bolt' />
          <span className="sidebar-title">Web fundamentals</span>
        </div>

        
        <div className="subitem">
          <FontAwesomeIcon icon={faBolt} className='bolt' />
          <span className="sidebar-title">Web fundamentals</span>
        </div>

        
        <div className="subitem">
          <FontAwesomeIcon icon={faBolt} className='bolt' />
          <span className="sidebar-title">Web fundamentals</span>
        </div>

        
        <div className="subitem">
          <FontAwesomeIcon icon={faBolt} className='bolt' />
          <span className="sidebar-title">Web fundamentals</span>
        </div>

      </div>

    </div>
  )
}
