import Order from "../assets/orderprocess/01.jpg"
import Delivery from "../assets/orderprocess/02.jpg"
import Pay from "../assets/orderprocess/03.jpg"
import Enjoy from "../assets/orderprocess/04.jpg"


const OrderProcess = () => {
    return ( 
        <>
            <div className="mx-8 md:py-8 py-4">
                <h2 className="text-center md:text-3xl text-2xl text-gray-900 mb-2 font-semibold">How it Works</h2>
                <p className="text-center">Completely network impactful users whereas next-generation applications engage out thinking via tactical action. </p>
                <div className="md:flex justify-center items-center">
                    <div className="flex flex-col items-center font-semibold hover:text-green-500">
                        <img className="md:m-8 m-4 p-3 shadow-md hover:shadow-lg rounded-full" src={Order} alt="" />
                        <p className="mt-2">Order</p>
                    </div>
                    <div className="flex flex-col items-center font-semibold hover:text-green-500">
                        <img className="md:m-8 m-4 p-3 shadow-md hover:shadow-lg rounded-full" src={Delivery} alt="" />
                        <p className="mt-2">Order</p>
                    </div>
                    <div className="flex flex-col items-center font-semibold hover:text-green-500">
                        <img className="md:m-8 m-4 p-3 shadow-md hover:shadow-lg rounded-full" src={Pay} alt="" />
                        <p className="mt-2">Order</p>
                    </div>
                    <div className="flex flex-col items-center font-semibold hover:text-green-500">
                        <img className="md:m-8 m-4 p-3 shadow-md hover:shadow-lg rounded-full" src={Enjoy} alt="" />
                        <p className="mt-2">Order</p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default OrderProcess;