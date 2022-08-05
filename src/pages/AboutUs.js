import React from 'react'

export default function AboutUs() {
  return (
    <div className='m-6  text-white '>
    <div className='container mx-auto h-60  p-10 rounded-md  bg-amber-400 '>
      <div className=' text-white md:flex flex  space-x-96'>
          <div className='p-5 my-5 mx-10'>
                <p className=' text-4xl font-medium py-4'>About Us</p>
          </div>
        

      </div>
    </div>


    <div className='container mx-auto h-screen p-10 rounded-md  shadow-md my-10 '>
      <div className=' text-slate-900  '>
          <div className='p-10 mt-10'>
                <p className=' text-4xl font-medium py-4'>Project Background</p>
                <p>Kurdlance (Mobile application or website ) which is a freelancing job

                A freelance job is one where a person works for themselves, rather than for a company. While
                freelancers do take on contract work for companies and organizations, they are ultimately
                self-employed,

                Freelancing include the freedom to work from home or from non traditional work space, a flexible
                work schedule ,and a better work life balance
                ,

                For all the companies and individual person who requests to process any work as a freelancing.

                The target user is all peoples in the KRI for the future maybe in Iraq ,like jobless peoples ,students
                who need some incomes for their needs in university, any one who have a bad or poor incomes can
                work as a freelancer to make more incomes ..etc.</p>
          </div>
          


            <div className=' md:flex flex justify-around  space-x-10  '>
                
                <div className="md:shrink-0">
                  <img className="h-60 w-60  md:h-60 object-cover md:w-60 rounded-full"  src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="immage not loading"/>
            </div>

            <div>
                  <p className='text-xl font-medium py-4'>Founder Kurdlancer</p>
                  <p className='text-sm font-normal '>Sara Sardar Hassan</p>
                  <p className='text-sm font-normal '>Email:</p>
                  <p className='text-sm font-normal '>kurdlancer@gmail.com</p>
                  <p className='text-sm font-normal '>Phone number:</p>
                  <p className='text-sm font-normal '>+941(7700 165 45 23)</p>
                </div>
            </div>

            
                 <div className='mt-10 md:flex flex justify-around  space-x-10 '>  
                  <p className='text-sm font-normal '>Total Jobs Posted:20,300</p>
                  <p className='text-sm font-normal '>Registered Users:56,000</p>
                </div>
                  

                 
                








      </div>
    </div>
</div>
  )
}
