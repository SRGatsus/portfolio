import React from "react";


let now=0
let masElemt=document.getElementsByClassName('ElemntJS')
let SliderElemt=document.getElementsByClassName('article-carousel')
const masComents = [{
Name:'Мария Прокудина',
Massage:'Мне посчастливилось учиться на курсе по шитью жакета у Алевтины Борисовны Золотовой. И от курса я в полном восторге! У меня есть 8-летний опыт пошива, в моем гардеробе есть и жакеты, сшитые своими руками, поэтому мои родные и близкие были удивлены моим желанием учиться на курсах Академии Burda. «Зачем тебе учиться, если ты и так все умеешь?» — вопрошали они. Но я ни разу не пожалела о своем выборе. Более полный курс по технологии пошива жакета трудно себе представить! Информация на занятиях дается очень концентрированно, но в доступной форме, есть возможность отработать узлы на образце и на своем изделии. Очень много нюансов, не упомянутых ни в одной из встреченных мной книг по технологии пошива, затрагивается на курсах. Думаю, занятия будут полезны не только новичкам, впервые осваивающим швейные азы, но и швеям со стажем, желающим и дальше совершенствовать свое мастерство.',
style:{maxHeight:'none'},
},{
    Name:'Мария Прокудина',
    Massage:'Добрый день, в этом письме наша группа хотела бы поблагодарить Академию Бурда за прекрасно организованные курсы по кройке и шитью в Москве, за отлично оборудованные, удобные, светлые классы и дружелюбных сотрудников. И конечно же, выразить отдельную огромную благодарность нашей замечательной преподавательнице Оксане Тимофеевой! Было очень приятно заниматься под ее чутким руководством! Она терпеливо объясняла каждой из нас премудрости швейного дела, была строга – заставляла переделывать до тех пор, пока мы не будем близки к совершенству или хотя бы не поймем, как оно (это совершенство) должно выглядеть! Она щедро делилась с нами секретами, которых не найдешь в обычных книгах! Это волшебно, когда в результате получается вещь «как в магазине» (в лучшем смысле этого слова) и эта вещь сделана моими собственными руками! Так приятно учиться у профессионала, который не только знает и любит свое дело, но еще и обладает учительским даром. Это очень важно, потому что можно владеть каким-то навыком самому, но не уметь доступно объяснить, научить этому других. Оксана сочетает в себе эти замечательные способности. И кроме всего прочего, она просто добрый, легкий и веселый человек, с которым очень приятно общаться. Поэтому каждую субботу с утра мы радостно бежали на занятия, хотя, как вы сами понимаете, это суббота, когда вставать в 7 утра совсем не хочется (некоторые из нас живут в Подмосковье), а хочется хорошенько выспаться после трудовой недели, но несмотря ни на что очень хотелось приехать на занятие! Еще раз выражаем глубокую признательность Оксане и очень надеемся на новые встречи и новые швейные подвиги под ее руководством!',
    style:{maxHeight:'none',overflowY: 'scroll'},
},{
    Name:'Вера, Катя, Гаянэ, Оксана, Динара, Лена',
    Massage:'Мне посчастливилось учиться на курсе по шитью жакета у Алевтины Борисовны Золотовой. И от курса я в полном восторге! У меня есть 8-летний опыт пошива, в моем гардеробе есть и жакеты, сшитые своими руками, поэтому мои родные и близкие были удивлены моим желанием учиться на курсах Академии Burda. «Зачем тебе учиться, если ты и так все умеешь?» — вопрошали они. Но я ни разу не пожалела о своем выборе. Более полный курс по технологии пошива жакета трудно себе представить! Информация на занятиях дается очень концентрированно, но в доступной форме, есть возможность отработать узлы на образце и на своем изделии. Очень много нюансов, не упомянутых ни в одной из встреченных мной книг по технологии пошива, затрагивается на курсах. Думаю, занятия будут полезны не только новичкам, впервые осваивающим швейные азы, но и швеям со стажем, желающим и дальше совершенствовать свое мастерство.',
    style:{maxHeight:'none'},
}
,{
    Name:'Вера, Катя, Гаянэ, Оксана, Динара, Лена',
    Massage:'Добрый день, в этом письме наша группа хотела бы поблагодарить Академию Бурда за прекрасно организованные курсы по кройке и шитью в Москве, за отлично оборудованные, удобные, светлые классы и дружелюбных сотрудников. И конечно же, выразить отдельную огромную благодарность нашей замечательной преподавательнице Оксане Тимофеевой! Было очень приятно заниматься под ее чутким руководством! Она терпеливо объясняла каждой из нас премудрости швейного дела, была строга – заставляла переделывать до тех пор, пока мы не будем близки к совершенству или хотя бы не поймем, как оно (это совершенство) должно выглядеть! Она щедро делилась с нами секретами, которых не найдешь в обычных книгах! Это волшебно, когда в результате получается вещь «как в магазине» (в лучшем смысле этого слова) и эта вещь сделана моими собственными руками! Так приятно учиться у профессионала, который не только знает и любит свое дело, но еще и обладает учительским даром. Это очень важно, потому что можно владеть каким-то навыком самому, но не уметь доступно объяснить, научить этому других. Оксана сочетает в себе эти замечательные способности. И кроме всего прочего, она просто добрый, легкий и веселый человек, с которым очень приятно общаться. Поэтому каждую субботу с утра мы радостно бежали на занятия, хотя, как вы сами понимаете, это суббота, когда вставать в 7 утра совсем не хочется (некоторые из нас живут в Подмосковье), а хочется хорошенько выспаться после трудовой недели, но несмотря ни на что очень хотелось приехать на занятие! Еще раз выражаем глубокую признательность Оксане и очень надеемся на новые встречи и новые швейные подвиги под ее руководством!',
    style:{maxHeight:'none',overflowY: 'scroll'},
},]

let constElemnts=masComents.length
function Main() {
    React.useEffect(() => {
    
            SliderElemt[1].style.transform='translate3d(-'+now*1230+'px, 0px, 0px)'
            SliderElemt[1].style.width=constElemnts*1230+'px'
            masElemt[now].classList.add('active')
    }, [])
    function ClickPravNavComment() {
        masElemt[now].classList.remove('active')
        now++
        if (now>constElemnts-1){now=constElemnts-1}
        SliderElemt[1].style.transform='translate3d(-'+now*1230+'px, 0px, 0px)'
        masElemt[now].classList.add('active')
    }
    function ClickLetNavComment() {
        masElemt[now].classList.remove('active')
        now--
        if (now<0){now=0}
        SliderElemt[1].style.transform='translate3d(-'+now*1230+'px, 0px, 0px)'
        masElemt[now].classList.add('active') 
    }
    function ClickNavComment(index) {
        masElemt[now].classList.remove('active')
        now=index
        SliderElemt[1].style.transform='translate3d(-'+now*1230+'px, 0px, 0px)'
        masElemt[now].classList.add('active') 
    }
    return(
        <main id="MainPages">

        <div className="content-header main-page">
            <div className="container">
                <h1>Shveyka NAO</h1>
                <a href="tel:+74957879445" className="phone-btn-link"></a>
            </div>
        </div>
        <div className="features features--main special">
            <div className="container">
                <div className="partition-title">Почему учиться надо у нас?</div>
                <div className="gallery-widget">
                    <div className="lSSlideOuter noPager">
                        <ul className="lSPager lSpg" style={{marginTop:'5px'}}></ul>
                        <div className="lSSlideWrapper usingCss">
                            <div  className="article-carousel flex-block lightSlider lSSlide"  style={{width:'1260px',height:' 264px',paddingBottom:'0%',transform:'translate3d(0px, 0px, 0px)'}}>
                                <div className="feature lslide active" style={{width: '390px',marginRight: '30px'}}>
                                    <div className="feature-image">
                                        <img src="img/fit_146_120_false_crop_146_120_0_0_q90_12_f8845d5490.webp" alt="Курсов много, а Burda одна"/>
                                    </div>
                                    <div className="feature-description">
                                        <div className="feature-slogan">Курсов много, а Shveyka одна</div>
                                        <p>Швейный эксперт #1 в России</p>
                                    </div>
                                </div>
                                <div className="feature lslide" style={{width: '390px',marginRight: '30px'}}>
                                    <div className="feature-image">
                                        <img src="img/fit_66_117_false_crop_66_117_0_0_q90_22_0339958f84.webp" alt="Шьем как дышим"/>
                                    </div>
                                    <div className="feature-description">
                                        <div className="feature-slogan">Шью как дышу</div>
                                        <p>Со мной легко начать, остановиться невозможно!</p>
                                    </div>
                                </div>
                                <div className="feature lslide" style={{width: '390px',marginRight: '30px'}}>
                                    <div className="feature-image">
                                        <img src="img/fit_150_121_false_crop_150_121_0_0_q90_32_e51d278221.webp" alt="У нас душевно"/>
                                    </div>
                                    <div className="feature-description">
                                        <div className="feature-slogan">У меня душевно</div>
                                        <p>Учу и учимся шить с удовольствием в компании друзей</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="academy-info">
            <div className="about-us">
                <div className="image" style={{backgroundImage:'url(img/34.jpg)'}}></div>
                <div className="description">
                    <div className="description-wrapper">
                        <h3>Я знаю о шитье все и готова поделиться этими знаниями с вами! </h3>
                        <ul>
                            <li><span style={{fontFamily:' Arial, sans-serif'}}>На
                                    каждом курсе шитья в Москве вы отшиваете одно изделие по вашим индивидуальным меркам, а это значит,
                                    что сидеть на вас оно будет идеально. </span><span style={{fontSize:'12.0pt',fontFamily:" 'Times New Roman';'serif'"}}>
                                </span></li>
                            <li><span style={{fontFamily:' Arial, sans-serif'}}>Вы
                                    закончите курс не просто с готовой вещью, а с глубокими знаниями, которые
                                    позволят вам шить самостоятельно. </span><span style={{fontSize:'12.0pt',fontFamily:" 'Times New Roman';'serif'"}}>
                                </span></li>
                            <li><span style={{fontFamily:' Arial, sans-serif'}}>Обучающие
                                    программы разбиты на уровни сложности, но вы можете выбрать только те курсы,
                                    которые интересны именно вам. Не переплачивайте за то, что вам не нужно!&nbsp;</span><span style={{fontSize:'12.0pt',fontFamily:" 'Times New Roman';'serif'"}}>
                                </span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="news">
            <div className="container">
                                   <div className="partition-title" style={{width: '200px',margin: 'auto'}}>Курсы</div>
                <div className="row flex-block flex-wrap flex-center">
                    <a href="#" className="news-wrapper col-lg-4 col-sm-6 col-xs-12">
                        <div className="news-block type-1">
                            <span className="image">
                                <img src="img/fit_390_248_false_crop_784_596_0_0_q90_35552_2032e33fd9e420576790d7527.webp" alt="Корректировка выкроек плечевых изделий. Часть 2"/>
                            </span>
                            <div className="description">
                                <div className="title">Корректировка выкроек плечевых изделий. Часть 2</div>
                                <p className="text">
                                </p>
                            </div>
                        </div>
                    </a>
                    <a href="#" className="news-wrapper col-lg-4 col-sm-6 col-xs-12">
                        <div className="news-block type-1">
                            
                            <span className="image">
                                <img src="img/fit_390_248_false_crop_1078_603_0_0_q90_35592_73a977c93a90deea3a0f15641.webp" alt="Большинство курсов по корректировке выкроек за полцены!"/>
                            </span>


                            <div className="description">
                                <div className="title">Большинство курсов по корректировке выкроек за полцены!</div>
                                <p className="text">
                                </p>
                            </div>
                        </div>
                    </a>
                    <a href="#" className="news-wrapper col-lg-4 col-sm-6 col-xs-12">
                        <div className="news-block type-1">
                            <span className="image">
                                <img src="img/fit_390_248_false_crop_640_428_0_0_q90_35632_02fc032decd540a02b2d3fb82.webp" alt="До 31 августа самые популярные курсы со скидкой 40%!"/>
                            </span>


                            <div className="description">
                                <div className="title">До 31 августа самые популярные курсы со скидкой 40%!</div>
                                <p className="text">
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div className="reviews special">
            <div className="container">
                <div className="partition-title">Отзывы учеников</div>
                <div className="gallery-widget">
                    <div className="lSSlideOuter">
                        <ul id='MSD' className="lSPager lSpg" style={{marginTop: '5px'}}>
                            {masComents && masComents.map((name,index)=>(
                                <li className="ElemntJS"><a onClick={()=>{ClickNavComment(index);constElemnts++}}>{index}</a></li>
                            ))}
                        </ul>
                        <div className="lSSlideWrapper usingCss">
                            <div  className="article-carousel flex-block flex-xs lightSlider lsGrab lSSlide"   style={{height:' 476px',paddingBottom:'0%',transform:'translate3d(0px, 0px, 0px)'}}>
                                {masComents && masComents.map((name,index)=>(
                                    <div className="lslide active" style={{width: '1230px',marginRight: '0px'}}>
                                        <div className="reviews__item type-0">
                                <div className="reviews__author"><b>{masComents[index].Name}</b></div>
                                        <div className="reviews__text custom-scrollbar mCustomScrollbar _mCS_1">
                                            
                                            <div id="scroll" className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside" style={masComents[index].style}>
                                <div id="mCSB_1_container" className="mCSB_container" style={{position:'relative',top:'0',left:'0'}} >{masComents[index].Massage}</div>
                                                </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                            ))}
                            </div>
                            <div className="lSAction"><a className="lSPrev" onClick={()=>ClickLetNavComment()}></a><a className="lSNext"onClick={()=>ClickPravNavComment()}></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="special-form type-3 js-email-subscribe-block">
            <div className="container">
                <div className="flex-block flex-gap">
                    <div className="info">
                        <div className="title">Хочу получать уведомления!</div>
                        <p>У нас бывают огромные скидки, но действуют они недолго. Вы хотите узнать о них первыми? Оставьте свой E-mail.</p>
                    </div>
                    <form className="subscribe-form form-default form-theme__default" action="#" method="get">
                        <div className="form-row field-email">
                            <input className="text-field" type="text" name="email" placeholder="E mail" required=""/>
                        </div>
                        <div className="btn-wrapper">
                            <input type="hidden" name="_csrf-frontend" value="SnRITpq1FlPDsGjwYjFyYj5ovJM2WkOpYwGzZpvBoroPRXB53-NOOqD4KcgXAioAZjDEpUwDLt5aV-YAqoPx_g=="/>
                            <button type="submit" className="btn btn-dark dashed large">Подписаться</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>  Настройить!!!!!*/}
    </main>
    )
    
}

export default Main;
