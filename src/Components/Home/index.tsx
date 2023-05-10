import React from 'react'
import style from './styles.module.scss';
import Card from '../Card';




const HomeComponent = () => {
  return (
    <div className={style.container}>
      <div className={style.title}><span>Hello welcome to Dashboard</span><img src='/images/hey.png' className={style.wave} /></div>
      <div className={style.subTitle}>Here you can check jobs in Top Companies related to your provided information for all new related jobs you can check new jobs section</div>
      <div className={style.cardContainer}>
        <Card color='#DB4437' imgUrl='/images/google.png' />
        <Card color='#4267B2' imgUrl='/images/facebook.png' />
      </div>
      <div className={style.cardContainer}>
      <Card color='#000000' imgUrl='/images/apple.png' />
      <Card color='#E50914' imgUrl='/images/netflix.png' />
      </div>
      <div className={style.lastContainer}>
        <Card color='#FF9900' imgUrl='/images/amazon.png'/>
      </div>
      <div className={style.imageContainer}>
        <img src='./images/home_page.png' />
      </div>
    </div>
  )
}

export default HomeComponent;
