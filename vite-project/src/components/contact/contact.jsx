import './contact.scss'
import location from '../../assets/icon/location_535239.png'
import telephone from '../../assets/icon/telephone_159832.png'
import email from '../../assets/icon/email_1944250.png'
import chesk from '../../assets/icon/checked.png'
import { useTranslation } from 'react-i18next'
function Contact() {
    const {t} = useTranslation()

    return (
        <div id='contact' className='contact'>
            <div className="title"> {t("banner__contact")}</div><br/>
            <div className="container">
                    <div className="contact__info">
                        <div className="cards">
                            <div className="card">
                                <div className="card__icon">
                                    <img src={location} alt="loc_img"/>
                                </div>
                                <div className="card__info">
                                    {t("contact__loc")}
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__icon">
                                    <img src={telephone} alt="loc_img"/>
                                </div>
                                <div className="card__info">
                                    93 339 08 48
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__icon">
                                    <img src={email} alt="loc_img"/>
                                </div>
                                <div className="card__email">
                                    shodmonovjavohir56@gmail.com
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__icon">
                                    <img src={chesk} alt="loc_img"/>
                                </div>
                                <div className="card__info">
                                    {t("front__frelan")}
                                </div>
                            </div>
                        </div>
                    </div>
                    <form className="contact__table">
                        <div className="table__map">
                            <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.7302874385878!2d65.7962630751307!3d38.86153044882104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4ea7fbdd2c7dcf%3A0xd615a6530b82e0d1!2sOpen%20Web%20Academy!5e0!3m2!1suz!2s!4v1691045965193!5m2!1suz!2s"  allowfullscreen="2" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="table__text">
                            How Can We <span>Help You</span>
                        </div>
                        <div className="table__input">
                            <div className="input__left">
                                <div className="input__name">
                                    <label  for="fname">Full name:</label><br />
                                    <input  required type="text" placeholder='Full name' id='fname'/>
                                </div>
                                <div className="input__name">
                                    <label for="email">Email Address:</label><br />
                                    <input required  type="email" placeholder='Email Address' id='email'/>
                                </div>
                                <div className="input__name">
                                    <label for="sub">Subject:</label><br />
                                    <input  required type="text" placeholder='Subject' id='sub'/>
                                </div>

        
                            </div>
                            <div className="input__textarea">
                                <label htmlFor="aria">Massage</label><br />
                                <textarea  name="" id="aria" cols="40" rows="10"></textarea>
                            </div>
                            
                        </div>
                        <div className="table__button">
                            <button  type='submit'>{t("button")}</button>
                        </div>
                    </form>
            </div>
        </div>

           
    )
  }
  export default Contact