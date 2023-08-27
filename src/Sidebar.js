import './App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsProgress, faBolt } from '@fortawesome/free-solid-svg-icons'

import { useState } from "react"

export default function Sidebar() {
  //On active le useSate: on donne un state, une updateMethod + une valeur par défaut du state qui est false, pour que rien n'apparaisse avant de cliquer
  const [click, toggleClick] = useState(false);
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

        {/* 1st subtem */}
        <div className="subitem">

          <FontAwesomeIcon icon={faBolt} className='bolt' />
          {/* Quand on click sur le texte; la valeur du state passe de false à true */}
          <span className="sidebar-title" onClick={() => toggleClick(!click)}>
            Web fundamentals
          </span>
          {/* Si la valeur du state est true, alors faite apparaitre le HTML suivant */}
          {click &&
            <div className='sub-of-sub'>
              <div className='sub-style'>
                <FontAwesomeIcon icon={faBolt} className='bolt-sub' />
                <span className='sub-title'>GOMYCODE's Mission</span>
              </div>
              <div className='sub-style'>
                <FontAwesomeIcon icon={faBolt} className='bolt-sub' />
                <span className='sub-title'>GOMYCODE's Methodology</span>
              </div>
              <div className='sub-style'>
                <FontAwesomeIcon icon={faBolt} className='bolt-sub' />
                <span className='sub-title'>Course planning</span>
              </div>
              <div className='sub-style'>
                <FontAwesomeIcon icon={faBolt} className='bolt-sub' />
                <span className='sub-title'>The career Follow-up</span>
              </div>
            </div>
          }
        </div>

        {/* 2nd subitem: on les transforme en display: block, pour que chaque element prenne sa ligne */}
        <div className="subitem">
          <FontAwesomeIcon icon={faBolt} className='bolt' />
          <span className="sidebar-title">Git & GitHub</span>
        </div>

        {/* 3d subitem */}
        <div className="subitem">
          <FontAwesomeIcon icon={faBolt} className='bolt' />
          <span className="sidebar-title">HTML</span>
        </div>

        {/* 4th subitem */}
        <div className="subitem">
          <FontAwesomeIcon icon={faBolt} className='bolt' />
          <span className="sidebar-title">CSS</span>
        </div>

        {/* 5th subitem */}
        <div className="subitem">
          <FontAwesomeIcon icon={faBolt} className='bolt' />
          <span className="sidebar-title">CSS Layout</span>
        </div>

        {/* 6th subitem */}
        <div className="subitem">
          <FontAwesomeIcon icon={faBolt} className='bolt' />
          <span className="sidebar-title">Intro. to Algorithms</span>
        </div>

        {/* 7th subitem */}
        <div className="subitem">
          <FontAwesomeIcon icon={faBolt} className='bolt' />
          <span className="sidebar-title">Data structures</span>
        </div>

        {/* 8th subitem */}
        <div className="subitem">
          <FontAwesomeIcon icon={faBolt} className='bolt' />
          <span className="sidebar-title">Famous Sorting</span>
        </div>

        {/* 10 subitem */}
        <div className="subitem">
          <FontAwesomeIcon icon={faBolt} className='bolt' />
          <span className="sidebar-title">Concept of Recursion</span>
        </div>

        {/* 11 subitem */}
        <div className="subitem">
          <FontAwesomeIcon icon={faBolt} className='bolt' />
          <span className="sidebar-title">JavaScript</span>
        </div>

        {/* 12 subitem */}
        <div className="subitem">
          <FontAwesomeIcon icon={faBolt} className='bolt' />
          <span className="sidebar-title">DOM</span>
        </div>

        {/* 13 subitem */}
        <div className="subitem">
          <FontAwesomeIcon icon={faBolt} className='bolt' />
          <span className="sidebar-title">ES6</span>
        </div>

        {/* 14 subitem */}
        <div className="subitem">
          <FontAwesomeIcon icon={faBolt} className='bolt' />
          <span className="sidebar-title">REACT JS</span>
        </div>

        {/* 15 subitem */}
        <div className="subitem">
          <FontAwesomeIcon icon={faBolt} className='bolt' />
          <span className="sidebar-title">JSX and React Components</span>
        </div>

        {/* 16 subitem */}
        <div className="subitem">
          <FontAwesomeIcon icon={faBolt} className='bolt' />
          <span className="sidebar-title">React Props</span>
        </div>

         {/* 17 subitem */}
        <div className="subitem">
          <FontAwesomeIcon icon={faBolt} className='bolt' />
          <span className="sidebar-title">React State</span>
        </div>

         {/* 18 subitem */}
        <div className="subitem">
          <FontAwesomeIcon icon={faBolt} className='bolt' />
          <span className="sidebar-title">React Hooks</span>
        </div>

      </div>

    </div>
  )
}
