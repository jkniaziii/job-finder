import React from 'react'
import style from './styles.module.scss';


interface cardProps {
  imgUrl?: string;
  onClick?: any;
  color?: string;
}

const Card: React.FC<cardProps> = ({ imgUrl, onClick, color }) => {
  return (
    <div className={style.container}>
      <div style={{background: color}} className={style.whiteCard}></div>
      <div className={style.greenCard}>
        <div className={style.imageContainer}><div>
          <img src={imgUrl} />
        </div></div>
      </div>
    </div>
  )
}

export default Card;
