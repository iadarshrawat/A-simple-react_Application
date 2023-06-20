import React from 'react'
import "../styles/home.scss"
import vg from "../assets/2.webp"
import {AiFillGoogleCircle, AiFillTwitterCircle, AiFillAmazonCircle, AiFillClockCircle} from "react-icons/ai/"

function Home() {
  return (
    <>
      <div className='home'>
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi ea labore nesciunt at ipsa aliquid praesentium, animi facilis provident tempore molestiae dolore non repellendus placeat magnam perspiciatis, accusantium error quidem?
          </p>
        </div>
      </div>


      <div className="home3" id='about'>
        <div>
          <h1> Who we are ? </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem est, eum reiciendis voluptatibus amet at inventore, praesentium cumque aspernatur consequatur dignissimos dolorum. Quam, dolorum est! Laboriosam maiores explicabo vero facilis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora amet neque voluptatem libero voluptate asperiores ut sed, atque quod inventore cumque! Libero excepturi dolorum omnis molestiae veritatis ut error architecto!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem est, eum reiciendis voluptatibus amet at inventore, praesentium cumque aspernatur consequatur dignissimos dolorum. Quam, dolorum est! Laboriosam maiores explicabo vero facilis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora amet neque voluptatem libero voluptate asperiores ut sed, atque quod inventore cumque! Libero excepturi dolorum omnis molestiae veritatis ut error architecto!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem est, eum reiciendis voluptatibus amet at inventore, praesentium cumque aspernatur consequatur dignissimos dolorum. Quam, dolorum est! Laboriosam maiores explicabo vero facilis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora amet neque voluptatem libero voluptate asperiores ut sed, atque quod inventore cumque! Libero excepturi dolorum omnis molestiae veritatis ut error architecto!
            </p>
        </div>
      </div>


      <div className="home4" id='brands'>
        <div>
          <h1>Brands</h1>
          <article>

            <div 
            style={{
              aniamationDelay:"0.3s",
            }}>
              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>
            <div 
            style={{
              aniamationDelay:"0.3s",
            }}>
              <AiFillTwitterCircle/>
              <p>Google</p>
            </div>
            <div 
            style={{
              aniamationDelay:"0.3s",
            }}>
              <AiFillAmazonCircle/>
              <p>Google</p>
            </div>
            <div 
            style={{
              aniamationDelay:"0.3s",
            }}>
              <AiFillClockCircle/>
              <p>Google</p>
            </div>

          </article>
        </div>
      </div>

    </>
  )
}

export default Home 