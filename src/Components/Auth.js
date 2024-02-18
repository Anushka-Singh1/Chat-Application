import React from 'react'
import { auth, provider } from '../firebase-config.js'
import { signInWithPopup} from "firebase/auth";
import Cookies from 'universal-cookie';

const styles = {
    Style1: "flex flex-wrap -mx-3 mb-1",
    Style2: "flex justify-center items-center",
    Style3: "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-3 border border-blue-500 hover:border-transparent rounded"
};

const cookies = new Cookies();
function Auth(props) {
    const { setIsAuth } = props;
    const signInWithGoogle = async () => {
        try {
    const result= await signInWithPopup(auth, provider);
    cookies.set("auth-token",result.user.refreshToken);
    setIsAuth(true);
        } catch (error) {
            console.error(error);
        }
       
    };
    return (
        <div className="flex flex-col justify-center items-start mt-60 ml-1 mr-1 md:ml-[32.5vw] ">
            <form className="w-full max-w-xl bg-nav_color p-6 rounded-lg shadow-lg">
                <div className="px-3 py-1 text-center">
                    <div className="font-bold text-2xl text-black mb-1">Hello User!</div>
                    <img
                        className="h-auto mt-4 mx-auto"
                        src="/AuthImg.jpg"
                        alt="me"
                        width={300}
                        height={40}
                    />
                </div>
                <div className={styles.Style1}></div>
                <div className={styles.Style2}>
                    <button 
                    type='button'
                    className={styles.Style3} 
                    onClick={signInWithGoogle}>
                        Sign in with Google
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Auth
