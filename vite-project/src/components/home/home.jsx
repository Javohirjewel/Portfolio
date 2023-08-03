import './home.scss'
import { useTranslation } from 'react-i18next'

function Home() {

    const {t} = useTranslation()
    
    return (
    <div id='home' className='banner '>
        <div className="container"><p>{t("banner__content")}</p></div>
    </div>
    )
  }
  export default Home
  