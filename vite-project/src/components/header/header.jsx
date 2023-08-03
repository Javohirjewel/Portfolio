import { useState } from 'react'
import './header.scss'
import Logo from '../../assets/0808a80f92f043dcb40c9eaebaf59bea.png'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'

function Header() {
  const {t} = useTranslation()
  const [hide, setHide] = useState(false)
  const [select, setSelect] = useState("en")
  const [showNavbar, setShowNavbar] = useState(false)


  const showNavbarMenu = (elem) => {
    if(elem){
      setShowNavbar(!showNavbar)
    }
  }

  const setHideFunc = (e) =>{
    if(e.target){
      console.log(e.target.innerText)
      i18next.changeLanguage(e.target.innerText)
    }
    setHide(false)

  }
  return (
    <div className='header'>
      <div className='container'>
        <div className="header__drop" onClick={(e) => showNavbarMenu(e.currentTarget)}>
          <div className="drop__bor"></div>
          <div className="drop__bor"></div>
          <div className="drop__bor"></div>
        </div>
        <div className='header__logo'>
          <a href="/">
            <img src={Logo} alt="logotype" />
          </a>
        </div>
        <div className='header__left'>
          <div className={showNavbar ? 'header__menu show' : "header__menu"}>
            <ul onClick={() => setShowNavbar(false)}>
              <li><a href="#home">home</a></li>
              <li><a href="#about">{t("about__title")}</a></li>
              <li><a href="#service">{t("service__title")}</a></li>
              <li><a href="#portfolio">{t("banner__portfolio")}</a></li>                  
              <li><a href="#contact">{t("banner__contact")}</a></li>
            </ul>
            <div className='close' onClick={() => setShowNavbar(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            </div>
          </div>
          <div className='header__language'>
            <div className='select__language' onClick={() => setHide(!hide)}>
              {select}
              <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" fill="none" />
                <path d="M17 9.5L12 14.5L7 9.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            {hide &&
              <div className='option__language'>
                <ul onClick={(e) => setHideFunc(e)}>
                  <li onClick={() => setSelect("en")}>en</li>
                  <li onClick={() => setSelect("ru")}>ru</li>
                  <li onClick={() => setSelect("uz")}>uz</li>
                </ul>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header
