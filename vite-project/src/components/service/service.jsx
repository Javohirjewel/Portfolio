import './service.scss'
import { useTranslation } from 'react-i18next'

function Service() {
    const {t} = useTranslation()
    return (
        <>
        <div id='service' className="service">
            <div className="title">{t("service__title")}</div>
            <div className='service__banner'>
                <div className="container">
                    <div className="service__our">
                        {t("banner__service")}
                    </div>
                </div>
            </div>
            <div className="container">
            <div className="service__info">
                <div className="info__left">
                    <p>
                        {t("service__cloud")}
                    </p>
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis iusto in autem ad quidem nostrum tempore, voluptatem accusantium laudantium veniam non sapiente iste quis obcaecati rerum est corrupti maxime! Fuga fugiat cumque itaque laborum esse nam, a ipsam officiis error blanditiis mollitia veritatis eligendi excepturi saepe iste fugit ea suscipit et, sed dignissimos tempora animi, ullam repellendus magni? Ducimus, inventore?</h6>
                </div>
                <div className="info__right">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quam quaerat illo quia vitae! Mollitia, iste consequuntur. Fugiat illum corrupti modi non at ad quod rerum facilis sunt ipsam enim maiores adipisci nemo odit eos quisquam sit ipsa provident, officiis vero in dolores dolorem a asperiores. Rerum odio temporibus provident mollitia inventore quia eaque accusamus, in quam quidem ipsa ducimus alias consectetur aliquam quisquam non iste ut nemo vitae iusto repellendus, expedita tenetur molestiae. Recusandae nostrum architecto ab veritatis natus accusantium id neque ipsam quam omnis? Aspernatur, accusamus in eligendi temporibus dolor soluta facere voluptates!
                </div>

            </div>
            </div>
        </div>

        </>
    )
  }
  export default Service