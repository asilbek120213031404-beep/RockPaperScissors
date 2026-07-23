import { Link } from "react-router-dom";
import { supabase } from '../lib/supabaseClient'

async function signInWithFaceBook() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "facebook",
      options: {
        redirectTo: `${window.location.origin}/home`,
      },
    });
  
    if (error) {
      console.log(error.message);
    }
}

async function signInWithGitHub() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${window.location.origin}/home`,
      },
    });
  
    if (error) {
      console.log(error.message);
    }
}

async function signInWithGoogle() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/home`,
      },
    });
  
    if (error) {
      console.log(error.message);
    }
}

export default function SignIn() {

    return (
        <>

            <div className="flex flex-col items-center p-5 gap-8">
                <img src="/Group 20.png" alt="" />
                <div className="flex flex-col items-center gap-5">
                    <h1 className="text-3xl font-black"><span className="text-[#D94690]">R - </span><span className="text-[#F0CA44]"> P -</span><span className="text-[#5BC6E0]"> S</span></h1>
                    <div className="flex items-center gap-3 py-2 px-10 border-b-4 bg-[#1992E9] rounded-4xl border-[#115A8F] text-white w-[300px] cursor-pointer hover:shadow-2xl"  onClick={signInWithFaceBook}>
                        <img src="/Group 2.png" alt="" />
                        <p>Continue with Facebook</p>
                    </div>
                    <div className="flex items-center gap-3 py-2 px-10 border-b-4 bg-[#FF3D00] rounded-4xl border-[#862000] text-white w-[300px] cursor-pointer hover:shadow-2xl"  onClick={signInWithGoogle}>
                        <img src="/Group 1 (1).png" alt="" />
                        <p>Continue with Google</p>
                    </div>
                    <div className="flex items-center gap-3 py-2 px-10 border-b-4 bg-[#363636] rounded-4xl border-[#000000] text-white w-[300px] cursor-pointer hover:shadow-2xl"  onClick={signInWithGitHub}>
                        <img width={"30px"} src="/github.png" alt="" />
                        <p>Continue with GitHub</p>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                    <div className="h-1 bg-[#FBC399] w-[140px]"></div>
                    <p>or</p>
                    <div className="h-1 bg-[#FBC399] w-[140px]"></div>
                </div>
                <div className="flex items-center gap-3 py-2 px-10 border-b-4 bg-[#FBC399] rounded-4xl border-[#EA9975] text-white w-[300px] text-lg font-bold cursor-pointer">
                    <p>Sign in with password</p>
                </div>
                <p>Don’t have an account? <Link to={"/signup"} className="text-[#EA9975] font-bold cursor-pointer underline">Sign Up</Link></p>
            </div>
        </>
    )
}