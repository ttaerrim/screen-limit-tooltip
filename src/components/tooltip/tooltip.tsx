import styles from './tooltip.module.css';
import IconQna from '../../assets/icon_qna.svg';

interface Props {
  title?: string;
  message: string[];
}

export const Tooltip = ({ message, title }: Props) => {
  return (
    <div className={styles.tooltip}>
      <img className={styles['icon']} src={IconQna} alt='qna' width={16} height={16} />
      <div className={styles['arrow']} />
      <div className={styles['tooltip']}>
        {title && <p className={styles['header']}>{title}</p>}
        {message.map((message, index) => (
          <p className={styles['body']} key={index}>
            • {message}
          </p>
        ))}
      </div>
    </div>
  );
};
