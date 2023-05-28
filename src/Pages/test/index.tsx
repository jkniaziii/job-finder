import React, { useEffect, useRef, useState } from 'react'
import './style.scss'

const TEST = () => {

  const [videoHeight, setVideoHeight] = useState(0);

  const videoWrap = useRef<HTMLDivElement | any>(null);
  const textWrap = useRef<HTMLDivElement | any>(null);
  const video = useRef<HTMLDivElement | any>(null);



  useEffect(() => {
    const handleScroll = () => {
      console.log({videoHeight});
      
      const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const videoBottom = videoHeight + videoWrap.current.offsetTop;

      if (windowScrollTop > videoBottom) {
        videoWrap.current.style.height = videoHeight + 'px';
        video.current.classList.add('stuck');
        textWrap.current.classList.add('stuckText');

      } else {
        videoWrap.current.style.height = 'auto';
        video.current.classList.remove('stuck');
        textWrap.current.classList.remove('stuckText');
      }
    };

    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [videoHeight]);


  useEffect(() => {
    setVideoHeight(video.current.offsetHeight);
  }, []);



  return (
    <div>
      <div className="page">
        <div className="video-wrap" ref={videoWrap}>
          <div>
            <video ref={video} className="video" controls>
              <source src="https://cdn.superkool.io/uploaded-videos/8a6ebd4a-def9-4a81-9ff3-15674f8aa9feIntroducingGPT-4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div style={{ width: 1250, height: 720, margin: 'auto' }}>
          <div className="content" ref={textWrap}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi blanditiis recusandae distinctio optio commodi tenetur quisquam qui porro, aliquid inventore perferendis quibusdam at! Quisquam illum distinctio eveniet corrupti cupiditate quis?</p>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi blanditiis recusandae distinctio optio commodi tenetur quisquam qui porro, aliquid inventore perferendis quibusdam at! Quisquam illum distinctio eveniet corrupti cupiditate quis?</p>

            <h2>Lorem ipsum dolor sit.</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sequi delectus ducimus temporibus debitis natus, aliquam impedit saepe, doloribus a modi consectetur fugit unde? Maxime illo molestiae libero? Molestias labore ratione necessitatibus veniam. Doloremque nesciunt rerum incidunt nam ad quo sed porro, molestias mollitia aut, quaerat provident minima ab harum?</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptate consectetur ab velit aut eligendi, ullam accusantium cupiditate doloremque nisi eius culpa sunt quibusdam deserunt officiis? Ipsam deserunt et tenetur nihil quidem velit harum? Id quisquam voluptates eligendi est nobis harum impedit commodi soluta et sint sequi, quod quidem consequuntur dolorem corrupti vitae omnis. Obcaecati ratione sapiente exercitationem quis dolore.</p>

            <h2>Lorem ipsum dolor sit.</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sequi delectus ducimus temporibus debitis natus, aliquam impedit saepe, doloribus a modi consectetur fugit unde? Maxime illo molestiae libero? Molestias labore ratione necessitatibus veniam. Doloremque nesciunt rerum incidunt nam ad quo sed porro, molestias mollitia aut, quaerat provident minima ab harum?</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptate consectetur ab velit aut eligendi, ullam accusantium cupiditate doloremque nisi eius culpa sunt quibusdam deserunt officiis? Ipsam deserunt et tenetur nihil quidem velit harum? Id quisquam voluptates eligendi est nobis harum impedit commodi soluta et sint sequi, quod quidem consequuntur dolorem corrupti vitae omnis. Obcaecati ratione sapiente exercitationem quis dolore.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptate consectetur ab velit aut eligendi, ullam accusantium cupiditate doloremque nisi eius culpa sunt quibusdam deserunt officiis? Ipsam deserunt et tenetur nihil quidem velit harum? Id quisquam voluptates eligendi est nobis harum impedit commodi soluta et sint sequi, quod quidem consequuntur dolorem corrupti vitae omnis. Obcaecati ratione sapiente exercitationem quis dolore.</p>

            <h2>Lorem ipsum dolor sit.</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sequi delectus ducimus temporibus debitis natus, aliquam impedit saepe, doloribus a modi consectetur fugit unde? Maxime illo molestiae libero? Molestias labore ratione necessitatibus veniam. Doloremque nesciunt rerum incidunt nam ad quo sed porro, molestias mollitia aut, quaerat provident minima ab harum?</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptate consectetur ab velit aut eligendi, ullam accusantium cupiditate doloremque nisi eius culpa sunt quibusdam deserunt officiis? Ipsam deserunt et tenetur nihil quidem velit harum? Id quisquam voluptates eligendi est nobis harum impedit commodi soluta et sint sequi, quod quidem consequuntur dolorem corrupti vitae omnis. Obcaecati ratione sapiente exercitationem quis dolore.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi blanditiis recusandae distinctio optio commodi tenetur quisquam qui porro, aliquid inventore perferendis quibusdam at! Quisquam illum distinctio eveniet corrupti cupiditate quis?</p>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi blanditiis recusandae distinctio optio commodi tenetur quisquam qui porro, aliquid inventore perferendis quibusdam at! Quisquam illum distinctio eveniet corrupti cupiditate quis?</p>

            <h2>Lorem ipsum dolor sit.</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sequi delectus ducimus temporibus debitis natus, aliquam impedit saepe, doloribus a modi consectetur fugit unde? Maxime illo molestiae libero? Molestias labore ratione necessitatibus veniam. Doloremque nesciunt rerum incidunt nam ad quo sed porro, molestias mollitia aut, quaerat provident minima ab harum?</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptate consectetur ab velit aut eligendi, ullam accusantium cupiditate doloremque nisi eius culpa sunt quibusdam deserunt officiis? Ipsam deserunt et tenetur nihil quidem velit harum? Id quisquam voluptates eligendi est nobis harum impedit commodi soluta et sint sequi, quod quidem consequuntur dolorem corrupti vitae omnis. Obcaecati ratione sapiente exercitationem quis dolore.</p>

            <h2>Lorem ipsum dolor sit.</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sequi delectus ducimus temporibus debitis natus, aliquam impedit saepe, doloribus a modi consectetur fugit unde? Maxime illo molestiae libero? Molestias labore ratione necessitatibus veniam. Doloremque nesciunt rerum incidunt nam ad quo sed porro, molestias mollitia aut, quaerat provident minima ab harum?</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptate consectetur ab velit aut eligendi, ullam accusantium cupiditate doloremque nisi eius culpa sunt quibusdam deserunt officiis? Ipsam deserunt et tenetur nihil quidem velit harum? Id quisquam voluptates eligendi est nobis harum impedit commodi soluta et sint sequi, quod quidem consequuntur dolorem corrupti vitae omnis. Obcaecati ratione sapiente exercitationem quis dolore.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptate consectetur ab velit aut eligendi, ullam accusantium cupiditate doloremque nisi eius culpa sunt quibusdam deserunt officiis? Ipsam deserunt et tenetur nihil quidem velit harum? Id quisquam voluptates eligendi est nobis harum impedit commodi soluta et sint sequi, quod quidem consequuntur dolorem corrupti vitae omnis. Obcaecati ratione sapiente exercitationem quis dolore.</p>

            <h2>Lorem ipsum dolor sit.</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sequi delectus ducimus temporibus debitis natus, aliquam impedit saepe, doloribus a modi consectetur fugit unde? Maxime illo molestiae libero? Molestias labore ratione necessitatibus veniam. Doloremque nesciunt rerum incidunt nam ad quo sed porro, molestias mollitia aut, quaerat provident minima ab harum?</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptate consectetur ab velit aut eligendi, ullam accusantium cupiditate doloremque nisi eius culpa sunt quibusdam deserunt officiis? Ipsam deserunt et tenetur nihil quidem velit harum? Id quisquam voluptates eligendi est nobis harum impedit commodi soluta et sint sequi, quod quidem consequuntur dolorem corrupti vitae omnis. Obcaecati ratione sapiente exercitationem quis dolore.</p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default TEST



