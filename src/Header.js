import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faRotate, faToggleOff, faBell, faMessage, faBook } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (

    <>
      <div className="header">

        <div className="logo">
          <img src="/gomycodeLogo.svg" alt='logo-gomycode' />
        </div>

        <div className="menu">
          {/* 1st menu element */}
          <h4 className="home">Home</h4>

          {/* 2nd menu element */}
          <div className="element1">

            <h4>Learn</h4>

            <FontAwesomeIcon icon={faChevronDown} className='chevron' />

            <div className='dropdown1'>

              <div className="option"> {/* pour bouger les 2 para */}
              
              <div className="subgroup">
                <FontAwesomeIcon icon={faBook} className="logo-drop" />
                <div className="suboption">
                  <h5 className="drop-title1"> My courses </h5>  {/* Pour diminuer l'espace entre les 2 para */}
                  <h6>Access all of your courses</h6>
                </div>
              </div>

              <div className="subgroup">
                <FontAwesomeIcon icon={faBook} className="logo-drop" />
                <div className="suboption">
                  <h5 className="drop-title1"> My courses </h5>  {/* Pour diminuer l'espace entre les 2 para */}
                  <h6>Access all of your courses</h6>
                </div>  
              </div> 

              <div className="subgroup">
                <FontAwesomeIcon icon={faBook} className="logo-drop" />
                <div className="suboption">
                  <h5 className="drop-title1"> My courses </h5>  {/* Pour diminuer l'espace entre les 2 para */}
                  <h6>Access all of your courses</h6>
                </div>  
              </div>     

               <div className="subgroup">
                <FontAwesomeIcon icon={faBook} className="logo-drop" />
                <div className="suboption">
                  <h5 className="drop-title1"> My courses </h5>  {/* Pour diminuer l'espace entre les 2 para */}
                  <h6>Access all of your courses</h6>
                </div>  
              </div>     

               <div className="subgroup">
                <FontAwesomeIcon icon={faBook} className="logo-drop" />
                <div className="suboption">
                  <h5 className="drop-title1"> My courses </h5>  {/* Pour diminuer l'espace entre les 2 para */}
                  <h6>Access all of your courses</h6>
                </div>  
              </div>    

              </div>
              
            </div>
          </div>

          {/* 3rd menu element */}
          <div className="element1">
            <h4>Connect</h4>
            <FontAwesomeIcon icon={faChevronDown} className='chevron' />
            <div className='dropdown1'>
              <div className="option1">
                <h5> Community </h5>
                <h6 class='subtitle-el1'>Access all of your courses</h6>
              </div>
              <h5> Global Leaderboard </h5>
              <h5> Recruiters </h5>

            </div>

            {/* 4th menu element */}
          </div>

          <div className="element1">
            <h4>Explore</h4>
            <FontAwesomeIcon icon={faChevronDown} className='chevron' />
          </div>

          {/* 5th menu element */}
          <h4 className="practice">Practice Box</h4>

          {/* 6th menu element */}
          <div className="element1">
            <h4>LabPhase</h4>
            <FontAwesomeIcon icon={faChevronDown} className='chevron' />
          </div>

          {/* right par of the sidebar */}
          <div className="right-part">
            <FontAwesomeIcon icon={faRotate} className="logo-right" />
            <FontAwesomeIcon icon={faToggleOff} className="logo-right" />
            <FontAwesomeIcon icon={faBell} className="logo-right" />
            <FontAwesomeIcon icon={faMessage} className="logo-right" />
            <img src="/Jaafar-Bendahou-photo.jpg" className="photo-profil" alt='profil-piccture' />
            <div className="userName-div">
              <h4 className='username'>Jaafar</h4>
              <FontAwesomeIcon icon={faChevronDown} className='chevron' />
            </div>
          </div>

        </div>

      </div>
    </>
  )
}
