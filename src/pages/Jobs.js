import React from 'react'
import Layout from '../layouts/MainLayout';
import { Link } from 'react-router-dom';
import { delimiter } from '../utils/Deliminter';
export default function Jobs() {
  return <Layout>

<div className="container rounded-md  bg-amber-400 mx-auto grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-10 ">
      <div className=" mt-11 p-8">
        {' '}
        <div className=" flex flex-col items-center justify-center mt-11">
       <h2  className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-5xl ">
       Find Suitable Jobs, Find Great Works with bigest companies, 
          <span className="text-blue-900"> Make Money.</span>
        </h2></div>
        <p className="text-2xl text-blue-900 mt-3">
        Hire a pro for any skills.
        </p>
       
        

        <div className="mt-12 pt-5 ">
          <Link to="/freelancers" className="shadow-md hover:shadow-lg  bg-blue-900 hover:bg-blue-800 text-white px-6 py-4 rounded-lg text-xl font-semibold mr-4">
           Freelancers
          </Link>
          <Link to="/jobs" className="shadow-md hover:shadow-lg hover:text-amber-500 bg-white text-blue-900 px-6 py-4 rounded-lg text-xl font-semibold mr-4">
            Jobs
          </Link>
          <Link to="/postjobs" className="shadow-md hover:shadow-lg hover:text-amber-500 bg-white text-blue-900 px-6 py-4 rounded-lg text-xl font-semibold">
            Post Jobs
          </Link>
        </div>
      </div>
      <div className="bg-red-300">
        <img
          className="h-full w-auto object-cover "
          src="https://images.unsplash.com/photo-1486607303850-bc051a4ffad4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80" 
          alt="woman holding bags while shopping"
        />
      </div>
    </div>






   


        <div className='container mx-auto h-full  rounded-md  bg-amber-400 mt-10'>
              <div className=' text-white space-x-70 relative'>
                  <div className='p-10'>
                        <p className=' text-4xl font-medium py-4'>Jobs List:</p>

                        {/*jobs cart list*/}
                        <div className='container mx-auto grid grid-cols-4 gap-y-7  p-4 ml-12 mb-5'>

                        {/*card1*/}

                        <Link to="/jobinfo" className="h-min w-64  bg-white pb-4  rounded-lg  border-gray-200 shadow-md ">
                              
                                <img className="rounded-t-lg h-72 w-96 object-cover" src="https://topsoftwarecompanies.co/front_assets/img/company-logo/jiasaz1.jpg" alt="not loaded" />
                              
                            
                                <div className=' flex flex-col justify-center items-center'>
                                <h5 className="mb-2 pt-2 pl-2 text-xl font-semibold  text-amber-400">Company Name: Jiasaz</h5>
                            
                                <p className=" mb-3 pl-2 font-normal text-gray-700 ">Requied: UX/UI Designer</p>
                                <p className="mb-3 pl-2 font-normal text-gray-700 ">Location:Slemani</p>
                                    
                                <p className="inline-flex items-center ml-2 py-2 px-3 bg-amber-400  text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                                View
                                    <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </p>
                                </div>
                            
                        </Link>



                        {/*card2*/}

                        <Link to='/jobinfo' className="h-min w-64  bg-white pb-4  rounded-lg  border-gray-200 shadow-md  ">
                            
                            <img className="rounded-t-lg h-72 w-96 object-cover" src="https://cards2pay.com/wp-content/uploads/2021/05/asiacell.png" alt="not loaded" />
                            

                            <div className='pl-2 flex flex-col justify-center items-center'>
                                <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">Company Name: Asiacell</h5>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Requied: Web Devloper</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location: Erbil</p>
                                
                            <p className="inline-flex items-center py-2 px-3 bg-amber-400 text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                            View
                                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </p>
                            </div>
                        </Link>

                        {/*card3*/}

                        <Link to='/jobinfo' className="h-min w-64  bg-white pb-4  rounded-lg  border-gray-200 shadow-md 0">
                            
                            <img className="rounded-t-lg h-72 w-96 object-cover" src="https://i0.wp.com/hybridsim.com/wp-content/uploads/2022/06/Korek-Logo.jpg?fit=1366%2C768&ssl=1" alt="not loaded" />


                            <div className='pl-2 flex flex-col justify-center items-center'>
                                <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">Company Name: Korek</h5>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Requied: UX/UI Designer</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location: Dhok</p>
                                
                            <p className="inline-flex items-center py-2 px-3 bg-amber-400  text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                            View
                                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </p>
                            </div>
                        </Link>

                        {/*card4*/}

                        <Link to='/jobinfo' className="h-min w-64  pb-2 bg-white rounded-lg  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            
                            <img className="rounded-t-lg h-72 w-96 object-cover" src="https://t4.ftcdn.net/jpg/03/32/03/89/360_F_332038928_Jg6DZ3eJaWVOmf9hrZrz6JisyM35KdfT.jpg" alt="not loaded" />


                            <div className='pl-2 flex flex-col justify-center items-center'>
                                <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">Company Name: Ftth</h5>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Requied: Graphic Designer</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location: Dhok</p>
                                
                            <p className="inline-flex items-center py-2 px-3 bg-amber-400 text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                            View
                                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </p>
                        </div>
                        </Link>

                        </div>
                        {/*end carasoul1*/}


                        {/*start carasoul2*/}
                        <div className='container mx-auto grid grid-cols-4 gap-y-7  p-4 ml-12 mb-5'>

                            {/*card1*/}

                            <Link to='/jobinfo' className="h-min w-64 pb-2  bg-white rounded-lg  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                
                                <img className="rounded-t-lg h-72 w-96 object-cover" src="https://is4-ssl.mzstatic.com/image/thumb/Purple115/v4/2d/c1/cf/2dc1cf7b-399c-6021-b253-2185bfe73148/source/512x512bb.jpg" alt="not loaded" />
                            
                            
                                <div className='pl-2 flex flex-col justify-center items-center'>
                                    <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">Company Name: Fastlink</h5>
                            
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Requierd: HR & Training</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location:Halabja</p>
                                    
                                <p className="inline-flex items-center py-2 px-3 bg-amber-400  text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                                View
                                    <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </p>
                            </div>
                        </Link>



                        {/*card2*/}

                        <Link to='/jobinfo' className="h-min w-64 pb-2  bg-white rounded-lg  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            
                            <img className="rounded-t-lg h-72 w-96 object-cover" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA81BMVEUYK1X////ImSHFkwAVKVTEkQAAH04AAEMAAEETKFMAHk4AE0kAGkzFlAAQJlLHlxcAFkoADkcLI1EADEb4+PoADUb9/PhfZoDFx9AAAD8AFUnZunoAB0X09Pb79/AAIFfW195LVHJqcIiusb2YnKu7vcfh4ufr7O+BhpnLzNTdwovKnS/w5M3p17VmbYV0eo8kM1u1t8Llz6bVs2qNkaL27t/v4snPp03hyZqhpbIxPmIAADfNo0FDTW3bvoPSrFmuhy8rOV5HUXC8kSgAG1iIbj5vXUYwN1KYeDhGQ09iVUmlgTNSS0yBaEGUdjpzX0QAAC9DZUCtAAASn0lEQVR4nO1dCXeiyNoWAVFAULTVRLRd4hqN+zoxSy8z09+d+935/7/m1gpVgEl6bivo4TlzziRq0vXk3d96q0gkYsSIESNGjBgxYsSIESNGjBgxYsSIESNGGMhIYa/gxMgcwl7BqWH195mw13BaqHctK+w1nBZ6+04New2nRb7SyYW9htOi0GgUwl7DaaH0atpVxwspXxSmV+1MpakglK/amWYOgrC8amdqlQWho4W9ilMiNRGEhhL2Kk4J/U4Qivlrdqa5tiAIeyPsZZwQWgUwfLhmZ1poAIZ3etjLOCHsnnDdzhSmNILQtcNex+kgWYCgULzizNQ4QIbXnJnClAZgkgp7ISdDqo8YXrEzhSnNdTvT2xli2L3ezDRfQQyL11s/2Q3EUDhcbWaKUhoAX8/0agKkWsQMdx5nKu0Tl5aNZ/R8WtG1dIGzuMwUExQqHmcqJbrly0rlUvvlACpksdHXGeEYTcKwm/b8QO5OmNkXZJxWi2gjQK/s9ritB/qqN1xkEoB25oI01UpPeg7HlmN0JKUJcqYK8LK16QVRTKQKM4ei07UgKU1QZqrvoLwTF6SoiUR6R+k0qNWhLk2gMyXi7doXFTZuBpQP7XLnnVcGec+HiYnuLipjNfaUT4fwSXcd/+ONDVZLuMDSUaEiqxGdvKlRhkXDo47URNsXtbuoLimhL9iDKI7zoa84sAdHhBtpkIoeoI9cpyS5DPu8MzUS9I1pBH3NVD+yKJchdp2kSxPkTNMVX2iJDozy7ki+5TLERb01gV+vsDPl9rrTTqAUXiPoavKd3v426I3UhC67gpypimLeuI7sjclMLcWJk0LNt20TAa2V9KKwTAf86d0A30D+A+UtwhYL0dFSSyk7QUQQZt6qQ9tHgCLaFHz1989sJzfFEtNQIlddo5eaWLMlu9wQGHgSVjXVicSEEUybhYlXjMYXd+Eo/OGU5nnLOFNL7bD8hNkn7jekJ0InEuEDZy+DDB8B3DybZNo20sb7KnoFhXa9WeQI9ji3nD80hNptBJQUQEMWVmwp7HI0Rjwob8ujlCa7Qa/AzDT3wPETintGI1M2/KVRGdyQFGxyHZURo80amCUlpAwUWF1OYnEVEqkyT1BgCGYUVEXPIqGjEDT01Zh2S5pxkcJdLpFBurySRRQuhKkx9RAsu85Ke0U2GxUdhVBoUtLWqCAKnJNMGLhLs5ZFHC6abnWFsXQqKitPasuo6ChExqIL7TVJ0M7N2PUP0rhAmmfFMXqh3+QJOnWyoTyQMBMdHYXQnUJC2CkoqLmlBRbub+j7oZnF4WJX4d4GWot/UW5K34jYjJ+kuGbXPcDMxOkdUoooeixME4eLQY17d4kLQ8t2Y0w5YtuM1oFdbxpIROM5YDya5mPAyzjryShlt0cXjVjP4lObWTHM4rSZn4mQTCazAS/3YXM8N2VCaC1yBBOSysmsn3akWl+t6Kt1MZmU6/Q75+WiKiWsNGe4UdNRCLXFiWUg/YbixdqUZZm4F2EFGIojh+89IdvJS3aTjZ/CLJK7qAoXAUEWh4VYf84CwWH/soYMx85HnrNYjEvb4lPwWi4SfjRjWRZbUGReBR4zsuyFCSiiqmkMyJpD5wPbLM5wmn3PT0ZBRyW9MC0/lKf5nFvSaXeehRLLBMlo0lzAr4Ym/QphnjVRIt71/FwUYn1Kv8OOvdc+KA7HfE8IxLNJXCiUZtINF1szKY/8H4+Cjn5iNtCEwYGmlE7zqbTillyFagpf2kCGZom+fs/prIMI6Gjao45tm+TITgb+NGbfX1CGkGBSpPSH0CqffAQ7R/yocb4ZjoLX3oTeAZc+GYnItkScJwYkBtWxJCOGuFVTX4hJzrMS1NRgHbUO7XMNU+kT76IAHnAH1MnAx/K9o6kjSCw7htUhYjiHf4InEQnUVdk5CY4PwTpqqUXfltWJ4AsKGHfY4dxQv7gx5Tn5cguFBV3oGjGEijkS4WtJ19GMkuM3dTT12hPOdWZK8ZSuFI1XWO44LTYgL/EZi2WIpJUtCWNEy3zGUoUECa36Ql6wOip5O8F52LQafApc0K8G8peVu8mk3/EWDztLszJOBxs4UDO7dhkC0W2zmBj2OEBfSTK3lU2qreWUpRcULacpBZ1GISmlIMvvBPbWfzmUbq1vFfSUpWra0kOxOHt4nVIrrUM6MnSVY0xMXldNQgy/AIQJMU5mHW3t/JYv7wY9oVjsDe6+2DpIm1JagQw+nGds0yi3805bU094sxEWc+QrgcOpE50kknOQhUq82oB3syQq9owdqxjdXatZnrTpS82z9G2kBPuHNLS3KN4jWsDhbLzcMGFAq16VYSJ3T37iiIlj1ELZ5c9YQZU8AfEn4gJ7GC9ADgASU/LVB7ALZwvc19cVRtsnssGE01AooiCCSXN0L3IO520Uwzpfq/CVXX0ji6YobxBHaoBHQCSL64t3EVr3VNLYgqKeJWKTke+g4eFNZOtHOHGYhDdrw3XZHrOmSUICSkw/QFDmM9OAakqA+wXniYXBUJvOQrby83C4wdqXhYnp+m09TXIFMUS1KvhR3N2G2+BXD7SYryKFGxFNBU507aFjUhG7YKmUFrKvXux1Jnrog0SWwffo64SFmRU5ei/ff//9P99fWJLmeP5sitnHIRB4fW6aTDXVA7nhQ9NSNCv8kj+RUSZcAyNIOc3v088qyMLUz3/8ycoRVVGAGviP6aY2+tOCBnJD73xYeEjl+yzHhTfGm1//+EwXK33+ccwqs9gMK3slFa3Jmoyl529uWkzS9cibm/lisWMWVuJrIEERd6kmf+eioJkYGUvNKelp667T5cYOShtOil89KzamPiUGWkrdTGO2LFtpO5cKmaeRytn51/JyxnOjmDMOxfzh9fbW/7HuRhTvnxfDcYn9+Vqj3W8m7E96KoRZNyOl52292W833si7hdXCIfGvb77f8e3F1c3n8dG0pjfYTQ6arenWeS7RkqDBKephsqscaf4iDV2t59VNVnYImn/5A7b1O33brJaO/y6MbmXX2ufTmnpKnsDgbu3bV2hwx1dSH42Hz/eiKGb5wB5gT9LU/QOIyc3TfPReelrsAvOcaoVfb54SNDhlCg3uqFKWVuNtdWPKoLAIqHZfPgf82s+sO4XBUDY31fn6vVKxB8yzbCkFYJ6/gic0uIL0lsFBjXwKEhuLPwMZvvg+B3mK5mN1u169o7jIPC1onv/YDQGD05T8OwYH1HI8H1afH+EuqCxm/UnnzzGkRLOinH1cbMertxW32AV53V5RgHn+vDglwG3wJjcv1dVovH1abO6hGLxc//UzDMGPZmUoyucq4PiBf7oH3dBPU5QOzYdW/27XqTSOG18gSvXVGgh2sUm61e/XAIaS5SeWBZoAjHE4Xq/q7/pXzK5RacP8/B8M2kqGZaV0/TavpBVF3zdb/WUb0Q2M7sFwneUf/iTT+MuJFkApxeTj4mk+ftefIhR73UHnrl8+gGwKmKJu/XNjdJcD6ea0vG3fWtNDcwKkOxs0em+yHTPy+e4X4uc/6btP49F7jgUT6zY6u2Wrubfydh7VHf8zryBIiYxhQOlqBTut5BP7MqALpdtzpAvc63i74ErDpG8i3fjDlXD1LckVsSKW96qiAIGplnHeJE6i0i3YWhp5JpCrIVfDG5k3bZNYP2OKcx+xGlHEaapQ0HInE9jPwLhBWzJzObi//W+OovTt/7mPsb2L7hI4jpyifLqFAotMlWjkp6g4PNp5Mr9/c6Vgff7T83eQmaZwsdNUIjRZCnIDQ9XSTTLEBlebFUXHTTIUX358swxJAnr97a+vPkHzjf3GIRoXSAJqdkGfNpfOTuJITor32/V6ew9itig/bjkxvvznx1Sa/vj3C0ucNq08je+2FrrhSXr6sOx0a1w+MBdpr2w1Hq/rQtXjcAAfT2a3eCaGmyV9U5qp9fYhX5+hqsuApG6Y5Bz/+N1+sFgXSkOZaPR8tRov3HmiZpj32Ej2JDCXm3ME6+/vWqBt4BXdCAC5DWuP59kRPUKwLXwAwRujPNCuRf1RZL+lKIZ3fF35EMH5kc1tD9BnhzLMEdwBFYzQbpFMBY0M+bAi5iVXj2yQ4v+R4dr68NG8r3qLpX5Ipqh/qJ66x0NsjyMhOMvZEuuT38pKX0PR05R33pVDkSTgcCwPZ5xkF98tlvD/qqUNHpFavPHbugU2bZPO5Hrcaedup93hR5+FGdFgOKVgik+wKnrEjJ6xspqLLdm9rwtbRBGPDx+jaLhjbmqqfx6KGv63e8sEml2aLh2Sg6V0Q0QIV/6MzIqIUBxviOzQQC2eSlwhyd47dHZ3bW+vslZOw6a3ZOk3k+LkLAzJYZhlWsUKlFFt+0trMnnYKwWVDphWs+I9Fs2KziOQyQzgWbAPwrOzVZmZxaj8pufSB895IaExedVzieauJvTOczUI8qT8+W2QTadQBacSHV3LtFgoEfsDqjh0RIc2psjxoDFI051ZhQnI1AzPwQQIYtyt8wwPw3P1g0Kgj8tYeCV1mZbtpXtCcE6mwND8LB7HJNPB9Y3oOBs8mWgpOyEIA+/tS6djWEkHa4ujo85ABdFME2rsCDNc4WMXaKQWYys7uVobDVhKNn86hQjyXDefWA9dJZgg1VG3rYQszsxuS8430IXir0Q3Do7c+X1yXl0/+GNu82wD7q9H/pYZw9d7gxNDJj37I8g0S0PehzvD9kzTNXrPkPcguyA8nG8gQzri0BSvE8Rh381ZkAd9JNL0BHpnd5QmapJzlhShFmothaEGZKsgFjJMFvTETMl0xmf9cJpPljKhkba4y4XfuaF+lIdJM2skUZNGQVhXmUcYuqPsUsre99udzm6SisKpbq+OFlswqq1lhuE8S44ioOKfvtH1Kjc7hGikdO1Wj8Rghuf0oTAz0sgbzmVXS2GrkRwngWGSVrsTTybfi+TZw0yG09Fu06Yji2PZeRWdIMWRr/4ISl75EcXNovLKp+93UbzUjNfRpW25N3+snNIBOhjHs462w/kIO9BlTuHPGUXwLiXOj3YkOMx/w7XisJAeySG9Ht8F6SmSdmBz0eg9A8M50AUVtGxDd5/i7RKfzABlE4rz3b95ik0jYdlsLjqJ2lXDjI4uyZaDzXdT8a0SQxNHwUYhzZ07QFd/FZruj0TsPgXGj1Ykcvwzxx+nqfyNHauIS6aOxmd4+CIpK++e4G9HY9+CQKL3A/fKCslHjFeOoFC+wSfXSXTc5eC1sy7ok1mUB4e391a+UEF19C7thGqbr2EbNr74ayXjkmmpJiSd/QC9pi11S/XddxNviCA6Onh1M6u058KIg0FuOhHxCS7YbsmztYMTHiSFeuWwWqV+4Hy096C4JZXtOdMGIjg5A32PAz7My6xWEEN4Wow4oURUtn+Rju40pjrVPFlYRXEOni7kElVKKcN8hK04Mwr++WMHns8NqKODPZtmeU9CVaBFSTnkTJ9wQYHO8zK26rnIJLdvUEmHDykl1FoK6/e8lf4dFgW++muOWqNF9BJz3VnFc4TZQFlc70wHm9+GNmjn+PZJges+dJtkmfi2mjUK+NhPMlfW+e6GBllcLxoZuHRoerIPLhJ2W85QBT7GvkIdRBzgme2PgA4M6ihGIQPPeNfAXoC1ZIZG8G3PdVT/4nv13Svag2NfoVyLXgaeIA8ewyiz4iWPDUDhEN+H7L3B1QfLrpxpJ+an4F4m6On+Ka4Dwmey3cvAZsf6hPlyBNTUC+eqPW84Y647w45Fcm6xmx09WxhBgu7Ns03P6pjgQAKdQtvajQhcuPNx0GTMdzM3ExxI5z5PTbYYicD3YZB7hgbHLpYXnBzNDReX9RQv0rLxpinkdk8kMuJY3CvML+wJUPjuk4GvSKd1stsP1ZxuzewmWl2LtyGleoFicTJtx7FIqqO47ZsIRr6jMBI9IeBBDo4zdRWYKUO6X6I1Nfs2LHjlif9JK9SZMo94YC9LbkyiGP2OwACBYOBVU4v2J9hrZtTEjLaxOq0LYpiQQJ1+8F5hTp0p9+iHjKY2+8t+a5/XLkhLIdSpb7qHPsHDe5G8lVKjdCr9w/A/oIref+0V7vWAZmnH5gAuH/jxD9f8tFwyeHtZT8v5KZCS94qf6SzhPuO5bj8MA3hP8WjP4grwCVUdvsfKXRFyyJn2o7aD/QuBi/ozjcGGAnzzp7dFdVVA+75RaNWfDMiZXrEZ4kc+RfChB78QsF18YX21nwR8uJy/CXdNsJpHN5quBHCL7ZpTmgTajFletS+Fu4vnOZwVGoAzDfH48jmgLkM6FXo2WGXhAtuGP4PMtBiB54+cEpLeuOpwCKCf7SkcYcF6uG5XGvDgiuvD1ROMESNGjBgxYsSIESNGjBgxYsSIEYz/Am9rmBhk/dtrAAAAAElFTkSuQmCC" alt="not loaded" />


                            <div className='pl-2 flex flex-col justify-center items-center'>
                                <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">Company Name: AUS</h5>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Requierd: Accounting</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location: Slemani</p>
                                
                            <p className="inline-flex items-center py-2 px-3 bg-amber-400 text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                            View
                                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </p>
                            </div>
                        </Link>

                        {/*card3*/}

                        <Link to='/jobinfo' className="h-min w-64 pb-2  bg-white rounded-lg  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            
                            <img className="rounded-t-lg h-72 w-96 object-cover" src="https://lumark.agency/images/Photo-1643632740857.jpeg" alt="not loaded" />


                            <div className='pl-2 flex flex-col justify-center items-center'>
                                <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">Company Name: Rwanga </h5>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Requierd: UX/UI Designer</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location: Erbil</p>
                                
                            <p className="inline-flex items-center py-2 px-3 bg-amber-400  text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                            View
                                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </p>
                            </div>

                        </Link>


                        {/*card4*/}

                        <Link to='/jobinfo' className="h-min w-64  pb-2 bg-white rounded-lg  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            
                            <img className="rounded-t-lg h-72 w-96 object-cover " src="https://ik.imagekit.io/tp/20220131-zain-saoedi-arabia-logo.png" alt="not loaded" />


                            <div className='pl-2 flex flex-col justify-center items-center'>
                                <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">Company Name: Zain</h5>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Requierd: Graphic Designer</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location: Dhok</p>
                                
                            <p className="inline-flex items-center py-2 px-3 bg-amber-400 text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                            View
                                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </p>
                            </div>

                        </Link>

                        </div>
                        {/*end carasoul2*/}



                        {/*start carasoul3*/}
                        <div className=' container mx-auto grid grid-cols-4 gap-y-7  p-4 ml-12 mb-5'>

                            {/*card1*/}

                            <Link to='/jobinfo' className="h-min w-64  pb-2 bg-white rounded-lg  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                
                                <img className="rounded-t-lg h-72 w-96 object-cover" src="https://seeklogo.com/images/A/Avesta_Design-logo-E886C61AF8-seeklogo.com.png" alt="not loaded" />
                            
                                
                                <div className='pl-2 flex flex-col justify-center items-center'>
                                    <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">Company Name: Avesta Group </h5>
                            
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Requierd: Translator</p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location: Halabja</p>
                                        
                                    <p className="inline-flex items-center py-2 px-3 bg-amber-400  text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                                    View
                                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </p>
                                
                                </div>
                        </Link>



                        {/*card2*/}

                        <Link to='/jobinfo' className="h-min w-64 pb-2  bg-white rounded-lg  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            
                            <img className="rounded-t-lg h-72 w-96 object-cover" src="https://play-lh.googleusercontent.com/inp5-0G0hA_--TUuKstE5t-5syoLv4x4p47DqxRzXLeAg-NdDauvXtOe_ggfF5K4aQ" alt="not loaded" />


                            <div className='pl-2 flex flex-col justify-center items-center'>
                                <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">Company Name: Nass Wallet</h5>

                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Skills: Back-End Devloper</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location: Dhok</p>
                                    
                                <p className="inline-flex items-center py-2 px-3 bg-amber-400 text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                                View
                                    <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </p>
                            </div>

                        </Link>

                        {/*card3*/}

                        <Link to='/jobinfo' className="h-min w-64 pb-2  bg-white rounded-lg  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            
                            <img className="rounded-t-lg h-72 w-96 object-cover" src="https://suncode.co/wp-content/uploads/freshizer/fb82075546ccfb880224f8558813c649_dlzar-construction-co-suncode-erbil-logo-web-design_-768-c-90.png" alt="not loaded" />


                            <div className='pl-2 flex flex-col justify-center items-center'>
                                <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">Company Name: Dlzar Construction</h5>

                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Requierd: Full Stack</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location: Erbil</p>
                                    
                                <p className="inline-flex items-center py-2 px-3 bg-amber-400  text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                                View
                                    <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </p>
                            </div>

                        </Link>



                        {/*card4*/}

                        <Link to='/jobinfo' className="h-min w-64  pb-2 bg-white rounded-lg  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            
                            <img className="rounded-t-lg h-72 w-96 object-cover" src="https://brandkri.com/wp-content/uploads/2019/12/SardarGroup.png" alt="not loaded" />


                            <div className='pl-2 flex flex-col justify-center items-center'>

                                    <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400" > {delimiter(Text, 20)}Company Name: Sardar Group</h5>

                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Requierd: Graphic Designer</p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location: Dhok</p>
                                        
                                    <p className="inline-flex items-center py-2 px-3 bg-amber-400  text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                                    View
                                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </p>
                            </div>

                        </Link>

                        </div>
                        {/*end carasoul3*/}


                  </div>
                  

                    

              </div>
            </div>


    
    
  </Layout>;
}
