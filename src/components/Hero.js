import HeroImage from "../assets/hero.png"
import { BiSearch } from "react-icons/bi"

const Hero = () => {
    return ( 
        <>
            <div className="bg-gray-100">
                <div className="md:flex md:justify-around items-center mx-8 md:py-32 py-12">
                    <div>
                        <h1 className="md:text-5xl text-3xl font-semibold text-gray-700 md:text-left text-center">The Home Of African Delicacies</h1>
                        <p className="my-4 md:text-left text-center">You make an order, we deliver it right at your doorstep!</p>
                        <div>
                            <input type="search" name="search" className="py-3 px-4 rounded-l-md shadow-md"/>
                            <button className="py-4 px-4 rounded-r-md shadow-md bg-green-500">
                                <BiSearch />
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/3 w-full">
                        <img src={HeroImage} alt="" />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Hero;