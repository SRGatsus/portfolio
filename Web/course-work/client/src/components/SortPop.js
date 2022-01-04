import React from 'react';
import PropTypes from 'prop-types';


const SortPopup = React.memo(function SortPopup({ items, activeSortType, onClickSortType }) {
    return(
                                    <div className="difficulty-filter courses-filter">
                                <button type="button" className="filter-show-btn">Уровень сложности</button>
                                <div className="filter__description">Выберите уровень</div>
                                <div className="filter-modal">
                                    <label
                                    className= 'checkbox-theme '
                                    onClick={() => onClickSortType(null)}>
                                    <span className={activeSortType === null ? ' courses-filters_Active' : 'checkbox-theme__text'}>
                                    <span className="hidden-xs hidden-sm">Все уровени</span>
                                    </span>
                                    </label>
                                    {items &&
                                    items.map((name, index) => (
                                    <label
                                    className= 'checkbox-theme '
                                    onClick={() => onClickSortType(index)}
                                    key={`${name}_${index}`}>
                                    <span className={activeSortType === index ? ' courses-filters_Active' : 'checkbox-theme__text'}>
                                    <span className="hidden-xs hidden-sm">{name}</span>
                                    </span>
                                    </label>
                                    ))}
                                </div>
                            </div>
    )
})








SortPopup.propTypes = {
    activeSortType: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickSortType: PropTypes.func.isRequired,
  };
  
  SortPopup.defaultProps = {
    items: [],
  };
  
  export default SortPopup;