import PopularDishesImg from "../assets/menu-list.jpg"
import { Link } from "react-router-dom";

const PopularDishes = ({menus, loading, error}) => {
    return ( 
        <>
            <div className="" 
                style={{
                        backgroundImage: `url(${PopularDishesImg})`, 
                        backgroundSize: `cover`,
                        paddingTop: `50px`, 
                        paddingBottom: `50px` 
                    }}
                >
                
                {loading && <h3>Loading data...</h3>}
                { error && <h4 className="text-red-500">{ error }</h4>}

                {/* <img className="h-full" src={PopularDishesImg} alt="" /> */}
                <div className=" bg-white flex flex-col justify-center items-center md:my-4 md:mx-32 mx-8 rounded-xl md:py-12 py-8">
                    <div>
                        <h1 className="text-center md:text-3xl text-2xl text-gray-900 mb-2 font-semibold">Browse Menu</h1>
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nemo eaque blanditiis. Voluptas, consectetur saepe.</p>
                        <div className="flex justify-center items-center md:mx-32 mx-8 md:my-16">
                            <Link to='/menu' className="md:flex ">
                                {menus.map((menu) => (
                                    <div id={menu.id} className="m-8 py-2 px-3 shadow-md hover:shadow-lg rounded-xl">
                                        <img className="rounded-xl w-72" src={menu.image_url} alt="" />
                                        <h3 className="mt-4 md:text-xl text-center font-semibold text-gray-800">{menu.name}</h3>
                                    </div>
                                ))}
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
     );
}
 
export default PopularDishes;