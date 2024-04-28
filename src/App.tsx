import './App.css';
import styles from './App.module.css';
import { Tooltip } from './components/tooltip/tooltip';

function App() {
  return (
    <div className={styles.main}>
      <section className={styles.section}>
        <section className={styles.section1}>section 1</section>
        <section className={styles['inner-section']}>
          <section>
            section 2
            <div className={styles.articles}>
              {[1, 2, 3, 4].map((item) => (
                <article key={item}>
                  article {item}
                  <Tooltip title='tooltip title ' message={['this is tooltip message']} />
                </article>
              ))}
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}

export default App;
