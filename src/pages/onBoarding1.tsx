import clsx from "clsx"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Boarding() {
    const [step, setStep] = useState(1)
    const navigate = useNavigate()

    let data = {
        imgUlr: '',
        title: '',
        imgUrl2: ''
    }
    if (step === 1) {
        data.imgUlr = 'public/Maqast.png'
        data.title = 'Scissors'
        data.imgUrl2 = 'public/Frame 1 (2).png'
    }
    else if (step === 2) {
        data.imgUlr = 'public/Rock.png';
        data.title = 'Rock'
        data.imgUrl2 = 'public/Frame 1 (3).png'
    }
    else if (step === 3) {
        data.imgUlr = 'public/Paper.png';
        data.title = 'Paper'
        data.imgUrl2 = 'public/Frame 1 (4).png'
    }

    function handleChange(direction) {
        if (direction === 'back') {
            setStep(prev => prev -= 1)
        } else if ( direction === 'next') {
            setStep(prev => prev += 1)
        }
    }

    function handleStart() {
        localStorage.setItem('boarding', 'true')
        navigate('/signin')
    }

    
    return (
        <div className="relative h-[95vh] overflow-hidden">
            <img className="w-40 relative top-1/6 left-1/2 -translate-x-1/2" src={data.imgUlr} alt="" />


            <div className={clsx(
                'flex pl-16 flex-col pr-30 items-center justify-center gap-10 pb-20 w-[450px] h-[450px] rounded-full absolute -right-1/4 -bottom-[100px] overflow-hidden',
                step === 1 && 'bg-[#5bc6e0]',
                step === 2 && 'bg-[#d94690]',
                step === 3 && 'bg-[#f0ca44]',
            )}>
                  <img className="w-20 mb-4" src={data.imgUrl2} alt="" />
                  <h2 className="text-white font-bold text-5xl mb-5">{data.title}</h2>
                  <div className="flex gap-3">
                    { step > 1 && <button onClick={() => handleChange('back')} className="py-2 px-10 rounded-3xl text-[#B67C62] flex items-center gap-2 font-bold bg-[#FBC399] border-b-4 border-[#EA9975] cursor-pointer" ><img width={"20px"} src="public/Path (3).png" alt="" />Back</button>}
                    
                    { step < 3 ? <button onClick={() => handleChange('next')} className="py-2 px-10 rounded-3xl text-[#B67C62] flex items-center gap-2 font-bold bg-[#FBC399] border-b-4 border-[#EA9975] cursor-pointer">Next <img width={"20px"} src="public/Path (2).png" alt="" /></button> : <button onClick={handleStart} className="py-2 px-4 rounded-3xl font-bold bg-[#FBC399] border-b-4 border-[#EA9975] text-[#B67C62] cursor-pointer">Let's start</button>}

                  </div>
            </div>
        </div>
    )
}