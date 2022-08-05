import { Link } from 'react-router-dom';

const links =[
    {name: 'Home', url: '/'},
    {name: 'Contact Us', url: '/Contactus'},   
    {name: 'About Us', url: '/Aboutus'},
        
];
 
export default function Footer() {
  return (
  
    <nav className=" text-amber-400 shadow-md  flex justify-between items-center w-screen">
       
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
         
        <div className="text-white mr-11 ">
        <button className="p-2 ml-4 bg-amber-400 shadow-md rounded-md hover:bg-amber-500 font-semibold">FB</button>
        <button className="p-2 ml-4 bg-amber-400 shadow-md rounded-md hover:bg-amber-500 font-semibold">LinkedIn</button>
        <button className="p-2 ml-4 bg-amber-400 shadow-md rounded-md hover:bg-amber-500 font-semibold">GitHub</button>
        </div>
    </nav>
  );
}
