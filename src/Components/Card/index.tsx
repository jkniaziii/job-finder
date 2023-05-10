import React from 'react'
import style from './styles.module.scss';


interface cardProps {
  title?: string;
  description?: string;
  onClick?: any;
  btnText?: string;
}

const Card: React.FC<cardProps> = ({title, description, onClick, btnText}) => {
  return (
    <div className={style.container}>
        <div className={style.whiteCard}></div>
        <div className={style.greenCard}>
        <div className={style.subTitle}>Top Jobs</div>
        </div>
    </div>
  )
}

export default Card;
