import './porfolio.scss'
import omniffod from '../../assets/portfolio/omnifood.jpg'
import conquer from '../../assets/portfolio/conquer.jpg'
import fotoprocat from '../../assets/portfolio/fotoprocat.jpg'
import markaz from '../../assets/portfolio/markaz.jpg'
import porfolio from '../../assets/portfolio/portfolio.jpg'
import spac from '../../assets/portfolio/space.jpg'
import todo from '../../assets/portfolio/todo.jpg'

import { useTranslation } from 'react-i18next'

function Portfolio() {
  const {t} = useTranslation()

    return (
        <div className='portfolio'>
          <div className="container">
            <div id='portfolio'  className='title'>
              {t("banner__portfolio")}
            </div>
            <div className='portfolio__cards'>
                <div className="card">
                  <div className='card__img'><img src={omniffod} alt="img" /></div>
                  <div className='card__hover'>
                    <div className='button__demo'><a href="https://64c8f4365f94b5029cca11af--super-pegasus-3839eb.netlify.app/" target="_blank">demo</a></div>
                    <div className='button__code'><a href="https://github.com/Javohirjewel/Omnifood.git" target="_blank">code</a></div>
                  </div>
                  <div className='card__name'>Omnifood</div>
                </div>
                <div className="card">
                  <div className='card__img'><img src={conquer} alt="img" /></div>
                  <div className='card__hover'>
                    <div className='button__demo'><a href="https://gentle-tartufo-eabda1.netlify.app/" target="_blank">demo</a></div>
                    <div className='button__code'><a href="https://github.com/Javohirjewel/Conquer.git" target="_blank">code</a></div>
                  </div>
                  <div className='card__name'>Conquer</div>
                </div>
                <div className="card">
                  <div className='card__img'><img src={todo} alt="img" /></div>
                  <div className='card__hover'>
                    <div className='button__demo'><a href="https://resonant-beignet-f983e9.netlify.app/" target="_blank">demo</a></div>
                    <div className='button__code'><a href="https://github.com/Javohirjewel/Router_beginner.git" target="_blank">code</a></div>
                  </div>
                  <div className='card__name'>ToDo</div>
                </div>
                <div className="card">
                  <div className='card__img'><img src={fotoprocat} alt="img" /></div>
                  <div className='card__hover'>
                    <div className='button__demo'><a href="https://64c8f47613379a027e316d17--thriving-belekoy-dc4eba.netlify.app/" target="_blank">demo</a></div>
                    <div className='button__code'><a href="https://github.com/Javohirjewel/Fotoprokat.git" target="_blank">code</a></div>
                  </div>
                  <div className='card__name'>Fotoprocat</div>
                </div>
                <div className="card">
                  <div className='card__img'><img src={markaz} alt="img" /></div>
                  <div className='card__hover'>
                    <div className='button__demo'><a href="https://bright-fox-105c02.netlify.app/" target="_blank">demo</a></div>
                    <div className='button__code'><a href="https://github.com/Javohirjewel/diplom_ish.git" target="_blank">code</a></div>
                  </div>
                  <div className='card__name'>markaz</div>
                </div>
                <div className="card">
                  <div className='card__img'><img src={spac} alt="img" /></div>
                  <div className='card__hover'>
                    <div className='button__demo'><a href="https://transcendent-starlight-7befc8.netlify.app/" target="_blank">demo</a></div>
                    <div className='button__code'><a href="https://github.com/Javohirjewel/Fotoprokat.git" target="_blank">code</a></div>
                  </div>
                  <div className='card__name'>Planets</div>
                </div>
                <div className="card">
                  <div className='card__img'><img src={porfolio} alt="img" /></div>
                  <div className='card__hover'>
                    <div className='button__demo'><a href="https://wondrous-haupia-211c5e.netlify.app/" target="_blank">demo</a></div>
                    <div className='button__code'><a href="https://github.com/Ibrohim571/Portfoilio.git" target="_blank">code</a></div>
                  </div>
                  <div className='card__name'>portfolio</div>
                </div>
               
                
                
            </div>
          </div>
        </div>
    )
  }
  export default Portfolio