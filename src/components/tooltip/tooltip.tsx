import styles from './tooltip.module.css';
import IconQna from '../../assets/icon_qna.svg';
import { useEffect, useRef, useState } from 'react';

interface Props {
  title?: string;
  message: string[];
}

export const Tooltip = ({ message, title }: Props) => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [leftX, setLeftX] = useState(0);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const tooltipWidth = tooltipRef.current?.clientWidth || 0;

    if (offsetX + tooltipWidth > screenWidth) {
      setLeftX(offsetX + tooltipWidth - screenWidth);
    } else {
      setLeftX(0);
    }
  }, [offsetX, screenWidth]);

  return (
    <div className={styles.tooltip} onMouseOver={(e) => setOffsetX(e.currentTarget.offsetLeft)}>
      <img className={styles['icon']} src={IconQna} alt='tooltip icon' width={16} height={16} />
      <div className={styles['arrow']} />
      <div style={{ left: leftX > 0 ? `-${leftX}px` : '0' }} className={styles['tooltip']} ref={tooltipRef}>
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
