import { Link, useLocation } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

function Card({ coffee,handleRemove }) {
    const {pathname} = useLocation()
    console.log(pathname)
   
    const { name, image, category, origin, type, id, rating, popularity } = coffee || {};

    return (

        <div className=" relative my-2">
            
            <Link to={`/coffee/${id}`} className="transition hover:scale-105 shadow-xl rounded-xl overflow-auto">
           
            <div className="card bg-base-300 w-full shadow-sm">
                <figure>
                    <img
                    className="h-[200px] w-full"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="p-2">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Category: {category}</p>
                    <p>Type: {type}</p>
                    <p>Origin: {origin}</p>
                    <p>Rating: {rating}</p>
                    <p>Popular: {popularity}</p>
                    
                </div>
            </div>
            </Link>
            {pathname === '/dashboard' &&<div onClick={()=>handleRemove(id)} className="absolute p-2 bg-warning rounded-full cursor-pointer -top-6  -right-2"><FaTrashAlt /></div>}
        </div>
    );
}

export default Card;
