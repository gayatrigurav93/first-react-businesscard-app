import profileimg from "./images/profileimg.jpeg"
import BusinessCard from "./components/BusinessCard.jsx"
import data from "./data.js"
export default function App(){
  const entry = data.map( (info) => {
    return( <BusinessCard 
    key= {info.key}
   img={profileimg}
   alt={info.alt}
   name={info.name}
   role={info.role}
   email={info.email}
   github={info.github} />
   
    )
  });

    return(
<div className="cardss">
 
{entry}

</div>

    )
}