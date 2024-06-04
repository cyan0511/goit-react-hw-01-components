import clsx from "clsx";
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const generateRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

export const Statistics = ({ title, stats }) => {
  return <section className={css.statistics}>
    { title ?
    <h2 className={css.title}>{title}</h2> : '' }
    <ul className={css['stat-list']}>
      {stats.map(stat => (
        <li
          className={clsx(css.item, { [css['no-title']]: !title})}
          key={stat.id}
          style={{ backgroundColor: generateRandomHexColor() }}
        >
          <span className={css.label}>{stat.label}</span>
          <span className={css.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
};



Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
