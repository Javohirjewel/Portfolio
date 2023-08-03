import './about.scss'
import { useTranslation } from 'react-i18next'

function Portfolio() {
    const {t} = useTranslation()

    return (
        <div id='about' className="about">
            <div className="container">
                <div className="title">{t("about__title")}</div>
                <div className="about__info">I am FrontEnd developer Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe placeat, reprehenderit cupiditate modi soluta ut sunt. At, quae nihil. Repudiandae animi, voluptate iure asperiores modi eveniet fugit perspiciatis laudantium et, minus quam reprehenderit dolor earum numquam. Nisi reiciendis illo, corporis exercitationem voluptate eaque animi nobis qui accusantium cupiditate reprehenderit impedit, ipsum cum unde iusto sint tempore excepturi, rem ratione deleniti est voluptatem maiores! Aspernatur doloribus ea alias quos magni earum sed nulla inventore ratione enim debitis necessitatibus soluta ab delectus esse dolorem facilis distinctio, quo excepturi nihil tenetur numquam obcaecati qui. Quasi enim facilis aperiam, molestiae eos sunt inventore blanditiis.</div>
                <div className="about__activity">
                    <div className="activity__who">
                        {t("about__who")}
                    </div>
                    <div className="activity__cards">
                        <div className="card">
                            <div className="card__number">
                                4 {t("card__year")}<span>+</span>
                            </div>
                            <div className="card__info">
                                {t("card__year__info")}
                            </div>
                        </div>
                        <div className="card">
                            <div className="card__number">
                                90 <span>+</span>
                            </div>
                            <div className="card__info">
                                {t("card__year__info2")}
                            </div>

                        </div>
                        <div className="card">
                            <div className="card__number">
                                8 <span>+</span>
                            </div>
                            <div className="card__info">
                            {t("card__year__info")}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

           
    )
  }
  export default Portfolio