import React from "react";



function Contacts() {
    return(
        <main>
        <div className="content-header contacts-header">
            <div className="container">
                <h1>Контакты</h1>
            </div>
            <div className="contacts-info">
                <div className="container">
                    <div className="row flex-block" style={{justifyContent: 'space-evenly'}}>
                        <div className="col-lg-4  col-xs-8 contacts-info__item phone">
                            <div className="name">Телефон:</div>
                            <div className="info">
                                <div className="ya-phone">
                                    <a href="tel:+99999999">+7 (999999) 99999</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 contacts-info__item email">
                            <div className="name">E-mail:</div>
                            <div className="info"><a href="mailto:#">@mail.ru</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

{/* Форму отсавить отзов */}
    </main>
    )
}

export default Contacts;