import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Fight() {

    const [ishora, setIshora] = useState("/Hand 1.png")
    const [randomIshora, setRandomIshora] = useState("")
    const [meningIshoram, setMeningIshoram] = useState("/Hand 1.png")
    const [ishoraChiqar, setIshoraChiqar] = useState("")

    const [natija, setNatija] = useState("")


    const handleButton = function () {
        const botIshora = ["Rock", "Paper", "Scissors"]
        const randomBotIshora = botIshora[
            Math.floor(Math.random() * botIshora.length)
        ];

        if (randomBotIshora === "Paper") {
            setIshora("/paper-man.png")
            setRandomIshora("Paper")
        } else if (randomBotIshora === "Rock") {
            setRandomIshora("Rock")
            setIshora("/rock-man.png")
        } else {
            setRandomIshora("Scissors")
            setIshora("/scissors-man.png")
        }

        // console.log(randomBotIshora)
    }

    const handlePaper = function () {
        handleButton()
        setMeningIshoram("/paper-man.png")
        setIshoraChiqar("Paper")
    }
    const handleRock = function () {
        handleButton()
        setIshoraChiqar("Rock")
        setMeningIshoram("/rock-man.png")
    }
    const handleScissors = function () {
        handleButton()
        setIshoraChiqar("Scissors")
        setMeningIshoram("/scissors-man.png")
    }

    const handleRandomIshora = function () {
        handleButton()
        const randomIshora = ["Rock", "Paper", "Scissors"]
        const randomBotIshora = randomIshora[
            Math.floor(Math.random() * randomIshora.length)
        ];
        // setRandomIshora(randomBotIshora)
        if (randomBotIshora === "Paper") {
            setIshoraChiqar("Paper")
            setMeningIshoram("/paper-man.png")
        } else if (randomBotIshora === "Rock") {
            setIshoraChiqar("Rock")
            setMeningIshoram("/rock-man.png")
        } else {
            setIshoraChiqar("Scissors")
            setMeningIshoram("/scissors-man.png")
        }

        // console.log(randomBotIshora)
    }

    useEffect(() => {
        if (randomIshora === "" || ishoraChiqar === "") return;

        if (randomIshora === ishoraChiqar) {
            setNatija("Draw 😕");
        }
        else if (
            (randomIshora === "Paper" && ishoraChiqar === "Rock") ||
            (randomIshora === "Rock" && ishoraChiqar === "Scissors") ||
            (randomIshora === "Scissors" && ishoraChiqar === "Paper")
        ) {
            setNatija("You Lose 😕");
        }
        else {
            setNatija("You Win 🏆");
            // localStorage.setItem("win", 1)
        }

    }, [randomIshora, ishoraChiqar]);

    const TOTAL_TIME = 15;
    const [time, setTime] = useState(TOTAL_TIME);

    useEffect(() => {
        if (time <= 0){
            setNatija("You Lose");
            return
        }

        const interval = setInterval(() => {
            setTime((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [time]);

    const percent = (time / TOTAL_TIME) * 100;



    return (
        <>
            <section className="bg-[#4847C4] w-full h-[94vh] flex flex-col items-s justify-center gap-20 relative">
                <div className="flex flex-col-reverse gap-10 items-center justify-between w-3 h-52 absolute ml-3">
                    <div
                        className="absolute bottom-5 left-0 w-3 bg-[#9ED37A] rounded-full transition-all duration-1000"
                        style={{ height: `${percent}%`, }}></div>
                    <h1 className="text-white text-sm font-light">
                        0:{time.toString().padStart(2, "0")}
                    </h1>
                </div>
                <div className="flex flex-col items-center justify-between gap-32 ">
                    <div className="w-[130px] rotate-180">
                        {
                            <img width={"120px"} className="z-10" src={ishora} alt="" />
                        }
                    </div>
                    <div className={natija ? "absolute top-[265px] z-30 flex items-center flex-col gap-2 px-10 py-8 bg-white rounded-xl" : "hidden"}>
                        <h1 className="text-2xl font-medium">{natija}</h1>
                        <h1 className="text-5xl">{natija === "You win" ? "" : ""}</h1>
                        <div className="flex items-center gap-5">
                            <Link to={"/home"} className="flex items-center text-[#B67C62] bg-[#FBC399] py-2 px-4 rounded-3xl border-b-4 gap-2 font-bold"><img src="/Path.png" alt="" /></Link>
                            <Link to={"/startFight"} className="flex items-center text-[#B67C62] bg-[#FBC399] py-2 px-4 rounded-3xl border-b-4 gap-2 font-bold"><img src="/Path copy.png" alt="" /></Link>
                        </div>
                    </div>
                    <h1 className="z-0 absolute top-[320px] text-6xl text-[#FFB24C] font-light">Fight</h1>
                    <div className="flex flex-col items-center ">
                        <div className="w-[130px]">
                            {
                                <img width={"120px"} className="z-10 -mb-39" src={meningIshoram} alt="" />
                            }
                        </div>
                        <div className="z-20 flex flex-col items-center gap-4 ">
                            <div className="flex items-center gap-2">
                                <button onClick={handleRock} className="flex flex-col items-center gap-2 bg-[#232586] text-white rounded-full py-2 w-[70px] h-[70px] text-[10px] cursor-pointer -mb-20"><img width={"20px"} src="/Shape (3).png" alt="" /> Rock</button>
                                <button onClick={handlePaper} className="flex flex-col items-center gap-2 bg-[#232586] text-white rounded-full py-2 w-[70px] h-[70px] text-[10px] cursor-pointer"><img width={"20px"} src="/Shape (4).png" alt="" /> Paper</button>
                                <button onClick={handleScissors} className="flex flex-col items-center gap-2 bg-[#232586] text-white rounded-full py-2 w-[70px] h-[70px] text-[10px] cursor-pointer -mb-20"><img width={"20px"} src="/Fill-1.png" alt="" /> Scissors</button>
                            </div>
                            <button onClick={handleRandomIshora} className="flex flex-col items-center gap-2 bg-[#232586] text-white rounded-full py-2 w-[70px] h-[70px] text-[10px] cursor-pointer"><img width={"20px"} src="/Random.png" alt="" /> Scissors</button>
                        </div>
                    </div>
                </div>
                {/* <div className="w-[100px] bg-white h-[100px] z-50">
                    <h1 className="text-white">hello</h1>
                </div> */}
            </section>
        </>
    )
}