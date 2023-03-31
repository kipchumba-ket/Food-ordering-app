import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import OrderProcess from "../components/OrderProcess";
import PopularDishes from "../components/PopularDishes";
import LogIn from "./LogIn";

const Home = ({menus, loading, error, user}) => {
    user = user || JSON.parse(localStorage.getItem("user"))
    
    console.log(user)

    return ( 
        <>
            
            {   !user
                 ? 
                <LogIn /> : 
                
                    <div>
                        <Navbar />
                    
                            <Hero />
                            <div className="flex justify-center">
                            <PopularDishes menus={menus} loading={loading} error={error} />
                        </div>
                        <div>
                                <OrderProcess />
                        </div>
                        <Footer />
                    </div>        
            }
            
        </>
     );
}
 
export default Home;