import { useParams } from "react-router-dom";
import UseFetch from "./UseFetch";

const Order = () => {
    const { id } = useParams()
    const {data: menu, loading} = UseFetch("http://localhost:3000/menus/" + id)

    console.log(menu)

    return ( 
        <>
            <div>
                {loading && <h3>Loading data...</h3>}
                {menu.menu_items && menu.menu_items.slice(0, 4).map((menu_item) => (
                    <div key={menu_item.id} className='md:mr-6 my-6 bg-green-100 p-2 rounded-lg'>
                        <div className="w-full">
                            <img className="rounded-xl " src={menu_item.image_url} alt="" />
                        </div>
                        <div className="py-2 px-3">
                            <h3 className="text-gray-700 md:text-xl text-lg font-semibold">{menu_item.name}</h3>
                            <p className="my-1">{menu_item.description.split(/\s+/).slice(0, 16).join(" ")}</p>
                            <h4 className="text-green-500 font-medium">Ksh {menu_item.price}</h4>
                            <div className="my-4 flex justify-between">
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
     );
}
 
export default Order;