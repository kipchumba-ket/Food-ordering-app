import  ContactBanner  from "../assets/contact-banner.jpg"
import {FiHome} from "react-icons/fi"
import {FaPhoneAlt} from "react-icons/fa"
import {HiOutlineMailOpen} from "react-icons/hi"
import {CgWebsite} from "react-icons/cg"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Contact = () => {
    return ( 
        <>
            <Navbar />
            <div>
            <div className="" 
                    style={{
                            backgroundImage: `url(${ContactBanner})`, 
                            backgroundSize: `cover`,
                            paddingTop: `100px`, 
                            paddingBottom: `100px` 
                        }}
                    >
                    <div className="flex justify-center lg:my-24 md:my-16 my-6">
                        <h2 className="font-medium md:text-lg text-base text-white">
                            Home - 
                            <span className="text-green-500 mx-2">About Us</span>
                        </h2>
                    </div>
                </div>

                <div className="bg-green-50 flex justify-center items-center">
                    <div className="md:my-48 my-24 mx-8 md:flex justify-between md:space-x-8 rounded-lg p-8 bg-white">
                        <div>
                            <h2 className="md:text-xl text-lg font-semibold text-gray-500">Contact Information</h2>
                            <div>
                                <div className="flex my-8">
                                    <FiHome className="text-5xl text-green-500" />
                                    <div className="mx-4">
                                        <p className="uppercase font-semibold text-gray-700">Office Address</p>
                                        <p>14 Park, Lavington, Nairobi</p>
                                    </div>
                                </div>
                                <div className="flex my-8">
                                    <FaPhoneAlt className="text-5xl text-green-500" />
                                    <div className="mx-4">
                                        <p className="uppercase font-semibold text-gray-700">Phone</p>
                                        <p>0729563326</p>
                                    </div>
                                </div>
                                <div className="flex my-8">
                                    <HiOutlineMailOpen className="text-5xl text-green-500" />
                                    <div className="mx-4">
                                        <p className="uppercase font-semibold text-gray-700">Email Address</p>
                                        <p>ketcybersecure@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex my-8">
                                    <CgWebsite className="text-5xl text-green-500" />
                                    <div className="mx-4">
                                        <p className="uppercase font-semibold text-gray-700">Website</p>
                                        <p>ourwebsite</p>
                                    </div>
                                </div>


                            </div>

                        </div>

                        <div>
                            <h2 className="md:text-xl text-lg font-semibold text-gray-500">Send Us A Message</h2>
                            <form action="#">
                                <div className="my-4">
                                    <input className="border-2 border-gray-400 rounded-md py-2 px-4 my-2 w-full" type="text" placeholder="Enter Name..."/>
                                    <input className="border-2 border-gray-400 rounded-md py-2 px-4 my-2 w-full" type="email" name="" placeholder="Enter Email..."/>
                                </div>
                                <div className="my-4">
                                    <input className="border-2 border-gray-400 rounded-md py-2 px-4 w-full" type="text" name="subject" placeholder="Enter Subject..." />
                                </div>
                                <textarea className="border-2 border-gray-400 rounded-md py-2 px-4 my-2 w-full" name="message" cols="30" rows="4" placeholder="Enter Message"></textarea>
                                <button className="py-2 px-4 rounded-md uppercase font-light bg-green-500 w-full">
                                    Submit Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
     );
}
 
export default Contact;