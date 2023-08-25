import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faRotate, faToggleOff, faBell, faMessage } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (

    <>
      <div className="header">

        <div className="logo">
          <img src="/gomycodeLogo.svg" />
        </div>

        <div className="menu">

          <h4 className="home">Home</h4>

          <div className="element1">
            <h4>Learn</h4>
            <FontAwesomeIcon icon={faChevronDown} className='chevron' />
          </div>

          <div className="element1">
            <h4>Connect</h4>
            <FontAwesomeIcon icon={faChevronDown} className='chevron' />
            <div class="dropdown">

            </div>
          </div>

          <div className="element1">
            <h4>Explore</h4>
            <FontAwesomeIcon icon={faChevronDown} className='chevron' />
          </div>

          <h4 className="home">Practice Box</h4>

          <div className="element1">
            <h4>LabPhase</h4>
            <FontAwesomeIcon icon={faChevronDown} className='chevron' />
          </div>


          <div className="right-part">
            <FontAwesomeIcon icon={faRotate} className="logo-right" />
            <FontAwesomeIcon icon={faToggleOff} className="logo-right" />
            <FontAwesomeIcon icon={faBell} className="logo-right" />
            <FontAwesomeIcon icon={faMessage} className="logo-right" />
            <img src="/Jaafar-Bendahou-photo.jpg" className="photo-profil" />
            <div className="element2">
              <h4 className='username'>Jaafar</h4>
              <FontAwesomeIcon icon={faChevronDown} className='chevron' />
            </div>
          </div>






        </div>

      </div>
    </>
  )
}
