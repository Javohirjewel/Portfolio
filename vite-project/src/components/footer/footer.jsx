import './footer.scss'
import telegram from '../../assets/icon/telegram.png'
import instagram from '../../assets/icon/instagram.png'
import github from '../../assets/icon/github-sign.png'
import email from '../../assets/icon/email_1944250.png'
import Logo from '../../assets/0808a80f92f043dcb40c9eaebaf59bea.png'
import { useTranslation } from 'react-i18next'

function Footer() {
    const {t} = useTranslation()
  return (
    <div id='footer' className="footer">
        <div className="container">
            <div className="footer__logo">
                <a href="/">
                    <img src={Logo} alt="logotype" />
                    
                </a>
            </div>
            <div className="footer__menu">
                <ul>
                <li><a href="#home">home</a></li>
                <li><a href="#about">{t("about__title")}</a></li>
                <li><a href="#service">{t("service__title")}</a></li>
                <li><a href="#portfolio">{t("banner__portfolio")}</a></li>                  
                <li><a href="#contact">{t("banner__contact")}</a></li>
                </ul>
            </div>
            <div className ="footer__social">
                <div className="social__icon">
                    <a target='_blanc' href="https://t.me/Javokh1r_off1c1al"><img src={telegram}  alt="img" /></a>
                </div>
                <div className="social__icon">
                    <a target='_blanc' href="https://www.instagram.com/javohir__0848/"><img src={instagram}  alt="img" /></a>
                </div>
                <div className="social__icon">
                    <a target='_blanc' href="https://github.com/Javohirjewel"><img src={github}  alt="img" /></a>
                </div>
                <div className="social__icon">
                    <a target='_blanc' href="https://mail.google.com/mail/u/0/#inbox"><img className='email' src={email}  alt="img" /></a>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer