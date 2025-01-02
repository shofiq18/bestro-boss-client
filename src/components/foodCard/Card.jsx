

const Card = ({ item }) => {
    const { name, recipe, image, price } = item; // Destructure from the item prop
    console.log(item); // To debug and confirm the data passed

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img src={image} alt="food-item" />
                </figure>
                <p className= "bg-slate-900 absolute text-white px-2 right-0 mr-10 mt-4 ">${price}</p>

                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Card;
