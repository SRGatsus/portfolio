import React from "react";
import { Categories,SortPopup,OneCourse } from "../components";
import { useSelector, useDispatch } from 'react-redux';
import {useHttp} from '../hooks/http.hook'
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchCourse ,setCourse} from '../redux/actions/allCourse';
import {LoadingBlock} from '../components'

const categoryNames = ['Шитье', 'Конструирование', 'Мастер-классы'];
const sortIems = ['Легкий', 'Средний', 'Сложный'];


 
function Course() {
    const dispatch = useDispatch();
    const {loading, request} = useHttp()
    const OneCourseItem = useSelector(({allCourse}) => allCourse.items);
    const { category, sortPopItems } = useSelector(({ filters }) => filters);
    const isLoaded = useSelector(({ allCourse }) => allCourse.isLoaded);

    React.useEffect(() => {
        dispatch(fetchCourse())
     registerHandler().then((data) => {
        dispatch(setCourse(data))  
        },
        (error) => {
        console.log(error); 
        })
      }, [category, sortPopItems]);

      const onSelectCategory = React.useCallback((index) => {  
           dispatch(setCategory(index));
      }, []);
    
      const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type));
          dispatch(setSortBy(type));
      }, []);

      const registerHandler = async () => {
        try {
          const data = await request('/api/get/course', 'POST', {category, sortPopItems})
          return data
        } catch (e) {
          
        }
      }


    return(
        <main>
        <div className="content-header courses-header courses-header--online">
            <div className="container">
                <h1 className="js-listing-page-title">Онлайн-курсы кройки и шитья</h1>
            </div>
        </div>

        <div className="courses">
            <div className="courses-navigation">
                <div className="container">
                    <Categories
                        activeCategory={category}
                        onClickCategory={onSelectCategory}
                        items={categoryNames}
                    />
                </div>
            </div>
            <div className="courses-filters">
                <div className="container">
                        <div className="courses-filters-wrapper">
                            <SortPopup
                                activeSortType={sortPopItems}
                                items={sortIems}
                                onClickSortType={onSelectSortType}
                            />
                        </div>
                </div>
            </div>
            <div className="courses-list__section">
                <div className="container">
                    <div className="row flex-block flex-wrap flex-center courses-list js-courses-container">
                        {(isLoaded &&OneCourseItem)? OneCourseItem.map((name,index)=>(
                        <OneCourse
                        itemIndex={index} 
                        itemCourse={OneCourseItem[index]}
                        />
                        ))
                    :Array(12)
                    .fill(0)
                    .map((_, index) => <LoadingBlock key={index} />)
                    }
                    </div>
                    <div className="article-content">
                        <div id="js-page-text"></div>
                    </div>
                </div>
            </div>
        </div>

        <div id="p0" data-pjax-container="" data-pjax-timeout="5000">
            <div className="special-form type-2">
                <div className="container">
                    <div className="flex-block flex-gap">
                        <div className="info">
                            <div className="title">Заказать обратный звонок!</div>
                            <p>Если хотите, мы перезвоним и ответим на все интересующие вопросы!</p>
                        </div>
                        <div>
                            <form id="pjax-callback-form" className="feedback-form form-default form-theme__default" action="#" method="post" data-pjax="1">
                                <input type="hidden" name="_csrf-frontend" value="ExcehzyRIeVX0jcMEwhYLR6f-BQK2I8593Szg1DiALRWJiawecd5jDSadjRmOwBPRseAInCB4k7OIublYaBT8A=="/>
                                <div className="form-group field-callbackform-url">

                                    <input type="hidden" id="callbackform-url" className="form-control" name="CallbackForm[url]" value="kursy/online/"/>

                                    <div className="help-block"></div>
                                </div>
                                <div className="form-row field-callbackform-phone required">

                                    <input type="text" id="callbackform-phone" className="form-control" name="CallbackForm[phone]" placeholder="+7 ХХХ ХХ ХХ ХХ" aria-required="true"/>

                                    <div className="help-block"></div>
                                </div>
                                <div className="btn-wrapper">
                                    <button type="submit" className="btn btn-dark dashed large" data-pjax-container="#pjax-callback-form">Позвоните мне</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </main>
    )
}


export default Course;