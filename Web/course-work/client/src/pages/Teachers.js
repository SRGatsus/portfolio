import React from "react";
import { OneTeachers } from "../components";
import { useSelector, useDispatch } from 'react-redux';
import {useHttp} from '../hooks/http.hook'
import { fetchTeachers ,setTeachers} from '../redux/actions/teachers';


function Teachers() {
    const dispatch = useDispatch();
    const {loading, request} = useHttp()
    const itemsTeachers = useSelector(({teachers }) => teachers.items);
    const isLoaded = useSelector(({ teachers  }) => teachers .isLoaded);
    React.useEffect(() => {
        dispatch(fetchTeachers())
     registerHandler().then((data) => {
        dispatch(setTeachers(data))  // вывести 'Все прошло отлично!'
        },
        (error) => {
        console.log(error); // вывести ошибку
        })
      //dispatch(setCourse(fgh.JSON))
      }, []);
    
      const registerHandler = async () => {
        try {
          const data = await request('/api/get/teachers', 'POST', {})
          //console.log('я сделал '+ data )
          return data
        } catch (e) {
          
        }
      }
    function ClickCourseToInfo(i) {
        let Elements=document.getElementsByClassName('tabs')
        let ScrollElements=document.getElementsByClassName('mCustomScrollBox')
        let OneElement=Elements[i]
        OneElement.className ='tabs active view-info'
        ScrollElements[i].scrollTop=0
    }
    function ClickInfoToCourse(i) {
        let Elements=document.getElementsByClassName('tabs')
        let ScrollElements=document.getElementsByClassName('mCustomScrollBox')
        let OneElement=Elements[i]
        OneElement.className ='tabs active'
        ScrollElements[i].scrollTop=0
    }
    

    return(
        <main>
        <div className="layout">
            <main>
                <div className="content-header teachers">
                    <div className="container">
                        <h1>Преподаватели</h1>
                    </div>
                </div>

                <div className="mentors container" id="mentors">
                    <div className="row flex-block flex-wrap">
                        {(isLoaded&&itemsTeachers)?
          itemsTeachers.map((name, index) => (
            <OneTeachers 
                itemIndex={index}      
                itemTeachers={itemsTeachers[index]}      
                OneClickCourseToInfo={ClickCourseToInfo}
                OneClickInfoToCourse={ClickInfoToCourse}           
            />
          )):
          "Ой ошибка на сервере"
          } 
                    </div>
                </div>

                

                <div></div>
                                    {/* Добавить заказа звонков */}

            </main>
        </div>

    </main>
    )
    
}
export default Teachers;