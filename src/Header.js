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
            <div className='dropdown1'>
              <div className= "option1">
                <h5> My courses </h5>
                <h6 class='subtitle-el1'>Access all of your courses</h6>
              </div>
              <h5> One to One </h5>
              <h5> Checkpoints </h5>
              <h5> Calendar </h5>
              <h5> Performance </h5>
            </div>
          </div>

          <div className="element1">
            <h4>Connect</h4>
            <FontAwesomeIcon icon={faChevronDown} className='chevron' />
            <div className='dropdown1'>
              <div className= "option1">
                <h5> Community </h5>
                <h6 class='subtitle-el1'>Access all of your courses</h6>
              </div>
              <h5> Global Leaderboard </h5>
              <h5> Recruiters </h5>

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
