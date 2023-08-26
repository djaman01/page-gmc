import './App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsProgress, faBolt } from '@fortawesome/free-solid-svg-icons'

import { useState } from "react"

export default function Sidebar() {
  //On active le useSate: on donne un state, une updateMethod + une valeur par défaut du state qui est false, pour que rien n'apparaisse avant de cliquer
  const [click, toggleClick]= useState(false);
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
          {/* Quand on click sur le texte; la valeur du state passe de false à true */}
          <span className="sidebar-title" onClick={()=>toggleClick(!click)}>
            Web fundamentals
          </span>
          {/* Si la valeur du state est true, alors faite apparaitre le HTML suivant */}
          {click && 
          <h5 className="sub-of-sub">
            <FontAwesomeIcon icon={faBolt} className='bolt' />
            GOMYCODE's Mission
          </h5>
          
          }
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
