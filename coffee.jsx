import { Link } from "react-router-dom";


function Coffee({coffe}) {
    const { name, image, category, origin, type, id, rating, popularity } = coffe || {};

    return (
        <div className="">
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
        </div>
    );
}

export default Coffee;
