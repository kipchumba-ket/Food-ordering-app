import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const LogIn = ({setUser}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

        function handleSubmit(e) {
            e.preventDefault();
            fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            })
            .then((res) => {
                if (res.ok) {
                res.json()
                .then((user) => {
                    console.log(user)
                    localStorage.setItem("me", JSON.stringify(user))
                    setUser(user)
                    navigate("/")
                })}
            });
        }

        const imgUrl = "https://cdn.pixabay.com/photo/2013/07/13/01/22/vegetables-155616_960_720.png"

    return ( 
        <>
            <div className="md:flex justify-center items-center md:mt-16 mt-12 mx-8">
                <div className="md:w-1/3 lg:mr-16 md:mr-8">
                    <img src={imgUrl} alt="" />
                </div>

                <div className="flex flex-col">
                    <form onSubmit={handleSubmit}>
                        <h1 className="md:text-2xl text-xl my-4 font-semibold text-gray-800">
                            Login
                        </h1>
                        <div>   
                            <label htmlFor="username">Username</label><br />
                            <input
                                type="text"
                                className="border-2 border-gray-400 rounded-md py-2 px-4 my-2 w-full"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label><br />
                            <input
                                type="password"
                                className="border-2 border-gray-400 rounded-md py-2 px-4 my-2 w-full"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="my-2 py-2 px-4 rounded-md uppercase font-light bg-green-500 w-full">
                            Login
                        </button>
                    </form>
                    <div>
                        <h3>
                            Don't have an account? 
                            <Link to="/signup" className="text-red-500 font-medium mx-2">
                                Sign Up
                            </Link>
                        </h3>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default LogIn;