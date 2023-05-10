import React from 'react'
import style from './styles.module.scss';
import Card from '../Card';




const HomeComponent = () => {
  return (
    <div className={style.container}>
      <div className={style.title}><span>Hello welcome to Dashboard</span><img src='/images/hey.png' className={style.wave} /></div>
      <div className={style.subTitle}>Top Jobs</div>
      <div className={style.cardContainer}>
      <Card />
      <Card />
      </div>
      <div className={style.lastContainer}>
      <Card />
      </div>
      <div className={style.imageContainer}>
      <img src='./images/home_page.png'  />
      </div>
    </div>
  )
}

export default HomeComponent;
