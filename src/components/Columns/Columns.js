import styles from './Columns.module.scss';

const Columns = (props) => {
  return (
    <article className={styles.column}>
      <span className={styles.icon + ' fa fa-' + props.icon} />
      <h2 className={styles.title}> {props.text} </h2> 
    </article>
  )
};

export default Columns;