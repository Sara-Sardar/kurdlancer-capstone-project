import React from 'react'
import { Carousel } from 'react-responsive-carousel';

export default function ReactCarasoul() {
  return (
    <Carousel
    showArrows={true}
    infiniteLoop={true}
    autoPlay={true}
    interval={3000}
    showIndicators={true}
    showStatus={true}
    showThumbs={false}
    >
                <div >
                    <p className='p-4 absolute top-2 left-1/2 transform -translate-x-1/2  text-md font-normal text-white' >Ads: You can advertise for your bussiness or products here.</p>
                    <img  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3871&q=80" alt='not loading' />
                    <p className='p-4 absolute top-96 left-1/2 transform -translate-x-1/2  text-lg font-semibold text-white' >Work any where you like.</p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt='not loading'/>
                    <p className='p-4 absolute top-96 left-1/2 transform -translate-x-1/2  text-lg font-semibold text-white' >Do the work that you love.</p>
                </div>

                <div>
                    <img src="https://images.unsplash.com/photo-1601933974703-d25155828f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt='not loading'/>
                  <p className='p-4 absolute top-96 left-1/2 transform -translate-x-1/2  text-lg font-semibold text-white' >Find Best freelancers in kurdistan.</p>  
                </div>

                <div>
                    <img src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt='not loading' />
                    <p className='p-4 absolute top-96 left-1/2 transform -translate-x-1/2  text-lg font-semibold text-white'  >Make money.</p>
                </div>

                <div>
                    <img src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt='not loading' />
                    <p className='p-4 absolute top-96 left-1/2 transform -translate-x-1/2  text-lg font-semibold text-white'  > Be your own boss.</p>
                </div>

                <div>
                    <img src="https://images.unsplash.com/photo-1543269865-0a740d43b90c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt='not loading' />
                    
                </div>

                <div>
                    <img src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt='not loading' />
                    
                </div>
                
            </Carousel>
  );
}
