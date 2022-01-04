import React from "react";
import PropTypes from 'prop-types';


const Categories = React.memo(function Categories( { activeCategory, items, onClickCategory } ) {
    
    return(
        <div className="courses-navigation__wrapper">
        <div
          className={activeCategory === null ? 'courses-navigation__link  active' : 'courses-navigation__link '}
          onClick={() => onClickCategory(null)}>
         Все курсы
        </div>
        {items &&
          items.map((name, index) => (
            <div
              className={activeCategory === index ? 'courses-navigation__link  active' : 'courses-navigation__link '}
              onClick={() => onClickCategory(index)}
              key={`${name}_${index}`}>
              {name}
            </div>
          ))}
      </div>
    )
    
}) 


Categories.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func.isRequired,
  };
  
  Categories.defaultProps = { activeCategory: null, items: [] };

export default Categories;