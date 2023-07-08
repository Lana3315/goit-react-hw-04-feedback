import React from "react";
import PropTypes from 'prop-types';
import css from './FeedBack.module.css'

export const FeedbackOptions = ({ options, leaveFeedback }) => {
  return (

    <ul className={css.btnlist }>
      {options.map(option => (
        <li key={option}>
          <button name={option} type="button" onClick={leaveFeedback} className={css.btn}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  leaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;