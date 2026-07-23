import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { Link, useNavigate } from "react-router-dom";

interface UserData {
    avatar_url?: string;
    full_name?: string;
}


export default function Home() {
    const navigate = useNavigate()
    const [wait, setWait] = useState(false)
    const [natija, setNatija] = useState(false)

    function fight() {
        navigate("/startFight")
    }

    function handleToggle(){
        setNatija(!natija)
    } 

    const handleLogout = async () => {
        setWait(true)
        const { error } = await supabase.auth.signOut()

        if (error) {
            console.error('Error logging out:', error.message)
        } else {
            console.log('User signed out successfully')
            setWait(false)
            navigate("/signin")
        }
    }

    const [foydalanuvchi, setUser] = useState<UserData>({})


    useEffect(() => {
        async function takeUser() {
            const {
                data: { user },
            } = await supabase.auth.getUser();

            console.log(user);
            if (user) {
                setUser(user.user_metadata);
            }
        }
        takeUser()
    }, [])




    return (
        <>
            <header className="flex items-center justify-between w-full p-5">
                <div className="flex items-center gap-4 h-10 w-32">
                    <img className="rounded-full w-10" src={foydalanuvchi.avatar_url} alt="" />
                    <h3>{foydalanuvchi.full_name}</h3>
                </div>
                <div className="flex items-center gap-4">
                    <img src="/Status.png" alt="" />
                    <img src="/Coins.png" alt="" />
                </div>
            </header>
            <main className="flex flex-col items-center gap-10 relative">
                <div className={natija ? "absolute z-30 flex items-center flex-col gap-2 px-8 py-10 bg-[rgba(0,0,0,0.70)] rounded-xl text-sm max-w-[320px] text-white" : "hidden"}>
                    <h1 onClick={handleToggle} className="absolute right-4 top-2 text-3xl cursor-pointer">×</h1>
                    <p># 🎮 O'yin haqida <br />
                        **Rock, Paper, Scissors** — bu ikki o'yinchi o'rtasida o'ynaladigan klassik va qiziqarli o'yin. Har bir o'yinchi bir vaqtning o'zida uchta ishoradan birini tanlaydi: <br /> <br />
                        * 🪨 **Rock (Tosh)** <br />
                        * 📄 **Paper (Qog'oz)** <br />
                        * ✂️ **Scissors (Qaychi)** <br /> <br />
                        ## 📜 O'yin qoidalari <br />
                        * 🪨 **Rock** ✂️ **Scissors**ni yengadi. <br />
                        * ✂️ **Scissors** 📄 **Paper**ni yengadi. <br />
                        * 📄 **Paper** 🪨 **Rock**ni yengadi. <br /> <br />
                        * Agar ikkala o'yinchi ham bir xil ishorani tanlasa, natija **durang** bo'ladi va raund qayta o'ynaladi. <br /> <br />

                        🎯 Omad tilaymiz va g'alaba siz bilan bo'lsin!
                    </p>
                </div>
                <img width={"150px"} src="/Group 20.png" alt="" />
                <img width={'350px'} src="/sparring.png" alt="" />
                <div className="flex items-center gap-3 py-2 px-10 border-b-4 bg-[#FBC399] rounded-4xl border-[#EA9975] text-white w-[300px] text-lg font-bold cursor-pointer">
                    <Link to={"/startFight"}><p>Start Find Your opponent</p></Link>
                </div>
            </main>
            <footer className="flex items-center justify-between w-full mt-10 p-5 -mb-5">
                <img onClick={fight} className="cursor-pointer" src="/Play-icon.png" alt="" />
                <img onClick={handleToggle} className="cursor-pointer" src="/Menu-icon.png" alt="" />
                <button className="flex items-center gap-2 cursor-pointer" onClick={handleLogout}>{wait ? "Waiting" : "Log Out"}<img width={"20px"} src="/logout (1).png" alt="" /></button>
            </footer>
        </>
    )
}