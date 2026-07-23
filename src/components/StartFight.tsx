import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient.js";
import { useNavigate } from "react-router-dom";

export default function StartFight() {

    const [foydalanuvchi, setUser] = useState({})
    const navigate = useNavigate();


    useEffect(() => {
        async function takeUser() {
            const {
                data: { user },
            } = await supabase.auth.getUser();

            console.log(user);
            setUser(user.user_metadata)
        }
        takeUser()
    }, [])

    const names = ["Ali", "Vali", "John", "Emma", "Alex"]
    const wins = [5, 10, 15, 20, 12]
    const loses = [5, 10, 15, 20, 12]
    const avatar = ["public/Group-60.png", "public/Group-60-Copy.png"]

    const randomName = names[
        Math.floor(Math.random() * names.length)
    ];
    const randomWin = wins[
        Math.floor(Math.random() * wins.length)
    ];
    const randomLose = loses[
        Math.floor(Math.random() * loses.length)
    ];
    const randomAvattar = avatar[
        Math.floor(Math.random() * avatar.length)
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
          navigate("/fight");
        }, 2000);
    
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <>
            <div className="flex flex-col w-full h-full items-center justify-between bg-[#4847C4] gap-20 p-10">
                <div className="flex flex-col items-center gap-2">
                    <img src={randomAvattar} alt="" />
                    <h1 className="text-xl font-bold text-[#FCBD11]">{randomName}</h1>
                    <p><span className="text-[#EC6051]">{randomLose}</span> Lose</p>
                    <p><span className="text-[#90C67B]">{randomWin}</span> Win</p>
                </div>
                <h1 className="text-5xl font-medium text-[#FFB24C]">VS</h1>
                <div className="flex flex-col items-center gap-2">
                    <img className="rounded-full w-24" src={foydalanuvchi.avatar_url} alt="" />
                    <h1 className="text-xl font-bold text-[#FCBD11]">{foydalanuvchi.full_name}</h1>
                    <p><span className="text-[#EC6051]">{randomLose}</span> Lose</p>
                    <p><span className="text-[#90C67B]">{randomWin}</span> Win</p>
                </div>
            </div>
        </>
    )
}