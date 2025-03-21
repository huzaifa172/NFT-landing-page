import './App.css'

function App() {
  return (
      <div className="main-cnt flex h-screen w-screen bg-[#0F0E0E] flex-col items-center justify-start">
   {/* hero section  */}
     <div className="hero-sec w-full flex flex-col items-center">
       
          {/* hero main section   */}
       <div className="main-sec flex flex-col items-center max-w-[1440px] pt-[100px]">
         
         {/* <div className="t-icon-row w-full  flex flex-row justify-center ">
            <div className="icon-div p-10 flex justify-center p-1 ">
              {/* <img src="../public/images__3_-removebg-preview (3) 1.png" alt="icon image" className='w-[36px]'/> */}
            {/* </div> */}
         {/* </div> } */}


         <div className="details-row w-full flex flex-row justify-center">
              <div className="details-cnt w-[40%]">
                <div className="heading-cnt"><h1>NEXT GEN</h1></div>
                <div className="tagline-cnt"><h2>VARTUAL REALITY</h2></div>
                <div className="question-cnt"><p>Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceut perspiciatis undeuisque. Maecenas. Eros mus. </p></div>

                <div><button>see more</button></div>
              </div>
              <div className="pic-cnt w-[40%] flex">
                <div className="pic flex justify-">
                  <img src="../public/man-wearing-vr-glass.png" alt="" />
                </div>
              </div>

         </div>

       </div>
       
      {/* hero second section  */}
       <div className="second-sec">
            <div className='inline-flex justify-center items-center gap-[34px]'>
              <div className="first">
                <img src="../public/Rectangle 5.png" alt="" />
                <p>Gear VR Headset</p>
              </div>
              <div className="second">
                <img src="../public/../public/Rectangle 8.png" alt="" />
                <p>Smart VR Headset</p>
              </div>
              <div className="third">
                <img src="../public/Rectangle 7.png" alt="" />
                <p>Play station VR</p>
              </div>
            </div>
       </div>
     
     
     
     </div>
      {/* hero section ends here  */}

    {/* third section  */}

    <div className='third-sec bg-[#0F0E0E] w-full flex justify-center items-center pb-[100px] pt-[50px]'>
      <div className='flex flex-row justify-between gap-[80px] max-w-[770px]'>
          <div className="third-cnt-child flex justify-start  items-center w-[50%]">
            <div>
              <img src="../public/thirdsec-images (6).png" alt="first image" />
            </div>
            <div className='flex flex-col items-end'>
              <div><img src="../public/thirdsec-download (5).png" alt="" /></div>
              <div><img src="../public/thirdsec-images (7).png" alt="" /></div>
            </div>
          </div>
          <div className="third-cnt-child w-[50%] flex flex-col   gap-[20px]">
            <div>
              <h2>Explore the metaverse one <span>pixle at a time</span></h2>
            </div>
            <div>
              <p>Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceut perspiciatis undeuisque. Maecenas. Eros mus.</p>
            </div>
            <div>
              <button className='play-now-btn'><span>Play now</span></button>
              <img src="" alt="" />
            </div>
          </div>
          </div>
    </div>
    {/* third section ends here  */}

    {/* fourth section  */}
    <div className=' bg-[#0F0E0E] w-full flex flex-row justify-center pb-[100px] pt-[0px]'>
    <div className='max-w-[770px] flex justify-between'>
      <div className="foruth-child  w-[50%] flex flex-col gap-[20px]">
        <div><h2>Touch the <span> reality</span></h2></div>
        <div><p>Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceut perspiciatis undeuisque. Maecenas. Eros mus.</p></div>
        <div><button>Play now</button></div>
      </div>
      <div className="foruth-child  w-[50%] flex justify-end">
        <div className="image">
          <img src="../public/images__8_-removebg-preview (1) 2.png" alt="" />
        </div>
      </div>
    </div>
    </div>
    {/* fourth section ends here  */}


          {/* fifth secion  */}
          <div className='fifth-sec bg-[#0F0E0E] w-full flex justify-center'>
  
              <div className='border-cnt w-full p-10 max-w-[480px] '>
              <svg className='svg1' xmlns="http://www.w3.org/2000/svg" width="480" height="204" viewBox="0 0 480 204" fill="none">
              <path d="M2.5 20C2.5 10.335 10.335 2.5 20 2.5H460C469.665 2.5 477.5 10.335 477.5 20V184C477.5 193.665 469.665 201.5 460 201.5H20C10.335 201.5 2.5 193.665 2.5 184V20Z" stroke="url(#paint0_linear_30_50)" stroke-width="5"/>
              <defs>
              <linearGradient id="paint0_linear_30_50" x1="240" y1="0" x2="240" y2="204" gradientUnits="userSpaceOnUse">
              <stop stop-color="#5EB4B2"/>
              <stop offset="1" stop-color="#DC00D3"/>
              </linearGradient>
              </defs>
              </svg>
              {/* ++++++++++++++++++++++++++++++++++= */}
                              <svg xmlns="http://www.w3.org/2000/svg" width="480" height="204" viewBox="0 0 480 204" fill="none">
                <g filter="url(#filter0_f_30_49)">
                <path d="M2.5 20C2.5 10.335 10.335 2.5 20 2.5H460C469.665 2.5 477.5 10.335 477.5 20V184C477.5 193.665 469.665 201.5 460 201.5H20C10.335 201.5 2.5 193.665 2.5 184V20Z" stroke="url(#paint0_linear_30_49)" stroke-width="5"/>
                </g>
                <defs>
                <filter id="filter0_f_30_49" x="-10.9" y="-10.9" width="501.8" height="225.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="5.45" result="effect1_foregroundBlur_30_49"/>
                </filter>
                <linearGradient id="paint0_linear_30_49" x1="240" y1="0" x2="240" y2="204" gradientUnits="userSpaceOnUse">
                <stop stop-color="#5EB4B2"/>
                <stop offset="1" stop-color="#DC00D3"/>
                </linearGradient>
                </defs>   
                </svg>

              
              <div className='fifth-child flex flex-col items-center justify-center gap-[20px] '>
                    <div >
                      <h3 className='text-white'>SUBSCRIBE TO OUR NEWSLETTER</h3>
                    </div>
                    <div>
                      <p>Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam class</p>
                    </div>
                    <div className='input-cnt w-[302px] flex items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="302" height="39" viewBox="0 0 302 39" fill="none">
                  <path d="M1.5 19.5C1.5 9.55888 9.55887 1.5 19.5 1.5H282.5C292.441 1.5 300.5 9.55887 300.5 19.5C300.5 29.4411 292.441 37.5 282.5 37.5H19.5C9.55887 37.5 1.5 29.4411 1.5 19.5Z" stroke="url(#paint0_linear_30_54)" stroke-width="3"/>
                  <defs>
                  <linearGradient id="paint0_linear_30_54" x1="151" y1="0" x2="151" y2="39" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#5EB4B2"/>
                  <stop offset="1" stop-color="#DC00D3"/>
                  </linearGradient>
                  </defs>
                  </svg>
                      <div className='w-[72%]'>
                        <input type="email"  placeholder='Email' className='text-white'/>
                      </div>
                      <div className='w-[20%]'>
                        <button >Subscirbe</button>
                      </div>
                    </div>
              </div>


              </div>
          </div>
          {/* fifth section ends here  */}
          

          {/* sixth sec footer */}
          <div className='sixth-sec bg-[#0F0E0E] w-full flex justify-center items-center pb-[50px]  p-[100px]'>
          <div className='sixth-cnt flex flex-col items-center justify-center w-[770px] gap-[40px]'>
              
              <div className="sixth-child w-full flex items-center justify-around gap-[50px]">
                    <div className="menu-footer"><a href="">Help</a></div>
                    <div className="menu-footer"><a href="">About us</a></div>
                    <div className="menu-footer"><a href="">Company</a></div>
                    <div className="menu-footer"><a href="">Services</a></div>
                    <div className="menu-footer"><a href="">Contacts</a></div>
              </div>
              <div className="sixth-child flex flex-col gap-[20px] items-center justify-center max-w-[315px]">
                  <div className="app-headin"><h3>Download our App</h3></div>
                  <div className="app-text"><p>Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceut</p></div>
                  <div className="app-icon flex flex-row items-center justify-center gap-[10px]">
                      <img src="../public/googlePlay.png" alt="Play store" />
                      <img src="../public/app-store.png" alt="App store" />
                    
                  </div>
              </div>
              <div className="sixth-child flex items-center justify-between w-full border-t pt-1 border-white">
                    <div className="footer-line flex gap-[5px]"><span className='first-spans'>Terms</span><span className='first-spans'>Privacy</span><span className='first-spans'>Conditions</span></div>
                    <div className="footer-line flex"><span className='second-span'>@2024 via ZOME Ltd All Right Reserved</span></div>
                    <div className="footer-line flex gap-[10px]"><span><img src="../public/facebook.png" alt="facebook" /></span><span><img src="../public/twitter.png" alt="twitter" /></span><span><img src="../public/instagram.png" alt="insta" /></span></div>
              </div>  
          </div>
          </div>
          {/* sixth sec footer ends here  */}
    </div>

)};

export default App
