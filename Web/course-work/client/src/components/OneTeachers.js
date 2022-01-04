import React from "react";


function OneTeachers({itemIndex,itemTeachers,OneClickCourseToInfo,OneClickInfoToCourse}) {
    let count = 0
    //itemTeachers.CourseTeacher.map(()=>(count++))
    return(
        <div className="mentor-info col-lg-4 col-sm-6 col-xs-12">
                            <header className="1">
                                <img className="image " src={itemTeachers.ImgUrl} alt={'Преподаватель:'+itemTeachers.Surname+' '+itemTeachers.Name+' '+itemTeachers.Patronym}/>
                                <div className="name"><b> {itemTeachers.Surname} </b> {itemTeachers.Name} {itemTeachers.Patronym}</div>
                                <p></p>
                            </header>
                            <div className="description">
                                <div className="tabs active view-info">
                                    {/* <div className="mentor-info-toggle" onClick={()=>OneClickInfoToCourse(itemIndex)} >Курсы</div> */}
                                    <div className="mentor-info-toggle tabs__info" onClick={()=>OneClickCourseToInfo(itemIndex)} >Информация</div>
                                </div>
                                <div className="wrapper custom-scrollbar mCustomScrollbar _mCS_1" >
                                    <div id="scroll" className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside" style= {{maxHeight:'none',overflowY: 'scroll'}} >
                                        <div  className="mCSB_container">
                                            {/* <ul className="mentor-courses">
                                                {itemTeachers.CourseTeacher &&
                                                itemTeachers.CourseTeacher.map((name, index) => (
                                                <li className="middle" key={name+'_'+index}><div>{itemTeachers.CourseTeacher[index].CourseName}</div></li>
                                                ))}
                                            </ul> */}
                                            <div className="info">
                                                <p>{itemTeachers.AboutTeacher}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    )
}

export default OneTeachers;