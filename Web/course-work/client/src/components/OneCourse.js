import React from "react";


function OneCourse({itemIndex,itemCourse}) {
    return(
        <div className= {"course-preview track-element-visibility-js " +itemCourse.ClassFil+" pre-order col-xs-12 col-sm-6 col-lg-4"}  data-name={itemCourse.name} data-price="1199"  data-category={itemCourse.category}>
        <header>
            <div className="category">{itemCourse.category}</div>
            <div className="difficulty">{itemCourse.difficulty}</div>
            <h3 className="name">{itemCourse.Name}</h3>
            {/* <div className="discount">-40%</div> */}
        </header>
        <div className="image">
            <img src={itemCourse.imgUrl} alt=""/>
        </div>
        <footer>
            <div className="price-wrapper">
                <div className="text">Стоимость</div>
                <div className="price">{itemCourse.price+' руб'}
                    {/* <span className="new">1&nbsp;199 руб</span><span className="old">1&nbsp;999 руб</span> */}
                    </div>
            </div>
            <div className="count">
            {itemCourse.Classes +" занятий"}</div>
            <div className="action">
                <div className="btn-next">Перейти на страницу курса</div>
            </div>
        </footer>
    </div>
    )
}

export default OneCourse;