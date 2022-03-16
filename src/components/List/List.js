import styles from './List.module.scss';
import Columns from '../Columns/Columns';

const List = () => {
  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>Things to do <span>soon</span></h2>
      </header>
      <p className={styles.description}>Interesting things I want to check out</p>
      <section className={styles.columns}>
        <Columns text='Books' icon='book' />
        <Columns text='Movies' icon='film' />
        <Columns text='Games' icon='gamepad' />
      </section>
    </div>
  );
};

export default List;