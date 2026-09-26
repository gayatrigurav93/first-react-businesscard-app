export default function BusinessCard(props){
    //console.log(props);
    return(
    <div className="card">
 <img src={props.img} alt= {props.alt} width={150}/>       
<h1>{props.name}</h1>
<p >{props.role}</p>
<div className="contact">
    <p>{props.email}</p>
    <a href={props.github}
    target="_blank"
    rel="noreferrer">Github</a>
</div>

    </div>
    )
}