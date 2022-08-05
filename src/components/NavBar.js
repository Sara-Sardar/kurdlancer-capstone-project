import { GlobeIcon } from '@heroicons/react/outline';


import { Link } from 'react-router-dom';

const links =[
    {name: 'Home', url: '/'},
    {name: 'Freelancers', url: '/freelancers'},   
    {name: 'Jobs', url: '/jobs'},
    {name: 'Post Jobs', url: '/postjobs'},    
];
 
export default function NavBar() {
  return (
    <div>
  
    <nav className="fixed-top text-amber-400 shadow-sm  flex justify-between items-center w-screen">
       
       <div className="flex "> 
       <a href="/" className="text-2xl mx-2 p-6 font-bold hover:underline ">KURDLANCER</a>
                
        <ul className="flex  py-4 ">
           {links.map((link,index)=>{
              return(
          <li className="text-xl mx-2 font-semibold  hover:underline rounded-md  py-2" key={index}>
                <Link to={link.url}>{link.name}</Link>
          </li>

              );
           })}
        </ul>
       </div>
         
        <div className="text-white mr-11">
        <button className="p-2 ml-4 bg-amber-400 shadow-md rounded-md hover:bg-amber-500 font-semibold">SignIn</button>
        <button className="p-2 ml-4  bg-amber-400 shadow-md rounded-md hover:bg-amber-500 font-semibold">SignUp</button>
        <button className="p-2  ml-4 mb- bg-amber-400 shadow-md rounded-md hover:bg-amber-500 font-semibold">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        </button>
        </div>
    </nav>
    </div>
  );
}






