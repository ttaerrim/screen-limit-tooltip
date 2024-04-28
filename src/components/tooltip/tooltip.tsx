import styles from './tooltip.module.css';
import IconQna from '../../assets/icon_qna.svg';
import { useEffect, useRef, useState } from 'react';

interface Props {
  title?: string;
  message: string[];
}

export const Tooltip = ({ message, title }: Props) => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [x, setX] = useState(0);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const tooltipWidth = tooltipRef.current?.clientWidth || 0;

    if (mouseX + tooltipWidth > screenWidth) {
      setX(mouseX + tooltipWidth - screenWidth);
    } else {
      setX(0);
    }
  }, [mouseX, screenWidth]);

  return (
    <div className={styles.tooltip} onMouseOver={(e) => setMouseX(e.screenX)}>
      <img className={styles['icon']} src={IconQna} alt='qna' width={16} height={16} />
      <div className={styles['arrow']} />
      <div style={{ left: x > 0 ? `-${x}px` : '0' }} className={styles['tooltip']} ref={tooltipRef}>
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
