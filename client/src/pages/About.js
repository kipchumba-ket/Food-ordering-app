import RiderImg from "../assets/rider-banner.jpg"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
    return ( 
        <>
            <Navbar />

            <div>
                <div className="" 
                    style={{
                            backgroundImage: `url("https://travellingjezebel.com/wp-content/uploads/2019/03/shutterstock_339765929.jpg")`, 
                            backgroundSize: `cover`,
                            paddingTop: `50px`, 
                            paddingBottom: `50px` 
                        }}
                    >
                    <div className="flex justify-center lg:my-24 md:my-16 my-6">
                        <h2 className="font-medium md:text-lg text-base text-white">
                            Home - 
                            <span className="text-yellow-500 mx-2">About Us</span>
                        </h2>
                    </div>
                </div>

                <div className="md:flex justify-around md:mx-16 mx-8 my-12">
                    {/* <div className="md:w-1/3"> */}
                        <img className="md:w-1/3" src={RiderImg} alt="" />
                    {/* </div> */}
                    <div className="md:mx-16 mx-0 md:mt-0 mt-8 flex flex-col justify-center md:text-left text-center">
                        <h1 className="md:text-5xl text-3xl font-bold text-gray-700">Afrikaan Restaurant</h1>
                        <h2 className="my-2 md:text-2xl font-medium text-green-500">Our History</h2>
                        <p className="md:text-left text-center">
                            You make an order, we deliver it right at your doorstep!
                            You make an order, we deliver it right at your doorstep!
                            You make an order, we deliver it right at your doorstep!
                            You make an order, we deliver it right at your doorstep!
                            You make an order, we deliver it right at your doorstep!
                        </p>
                    </div>
                </div>

                <div className="my-12 md:mt-24 bg-green-50">
                    <div className="md:mx-16 mx-8 md:py-16 py-8">
                        <h1 className="text-center md:text-4xl text-2xl font-bold text-gray-700">Why Choose Us</h1>
                        <h2 className="text-center my-2">m!</h2>
                        <div>

                        </div>
                    </div>
                </div>


            </div>

            <Footer />
        </>
     );
}
 
export default About;