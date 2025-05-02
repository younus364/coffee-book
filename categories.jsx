import { NavLink } from "react-router-dom";


function Categories({categories}) {
    
    return (
        <div>

            <div role="tablist" className="tabs tabs-lift flex justify-evenly">
                {categories.map(categori =>(
                     <NavLink
                       role="tab" 
                     key={categori.category}
                     to={`/categori/${categori.category}`}
                     className={({isActive})=>`tab ${isActive? 'tab-active' : ''}`}>{categori.category}</NavLink>
                ))}
               
                
            </div> 
            <hr />
        </div>
    );
}

export default Categories;
