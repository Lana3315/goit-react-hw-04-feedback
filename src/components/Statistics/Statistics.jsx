import PropTypes from 'prop-types';
import css from './Statistics.module.css'
export const Statistics = ({good,neutral,bad,total, positivePercentage}) => {
    return (
       <div>
        <ul className={css.list}>
          <li><p>Good: <span>{good}</span></p></li>
          <li><p>Neutral: <span>{neutral}</span></p></li>
          <li><p>Bad: <span>{bad}</span></p></li>
          <li><p>Total: <span>{total}</span></p></li>
        </ul>
        <div className={css.positivePercentage}>
          <p>Positive Feedback: <span>{positivePercentage}%</span></p>
          </div>
      </div>
    )
  }

 Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
   bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;