import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleSignUp = async () => {
        if (email === "" || password === "" || username === "" || rePassword === "") {
            setError("Iltimos maydonlarni to'ldiring!!")
            return
        } else if (username.length < 4) {
            setError("Foydalanuvchi ismi qisqa!!")
        } else if (email.includes("@") === false) {
            setError("Emailda '@' belgisi bo'lishi shart!!")
        } else if(password.length > 8){
            setError("Parol qisqa!!")
        } else if (password !== rePassword) {
            setError("Ikki xil parol kiritildi. Parolni tekshiring!!")
        } else {
            setLoading(true)

            const { data, error } = await supabase.auth.signUp({
                email: email,
                password: password,
            })

            if (error) {
                alert(error.message)
            } else {
                alert('Signup successful! Check your email for a verification link.')
                console.log('User Registered:', data.user)
            }
            setLoading(false)
            navigate("/home")
        }

    }

    return (
        <div className='flex items-center justify-center flex-col gap-10 px-5 py-10'>
            <img src="/Group 20.png" alt="" />
            <h3 className='text-3xl font-bold '>Create Account</h3>
            <div className='flex flex-col items-center gap-10'>
                <div className='flex items-center justify-center gap-5'>
                    <div className='flex flex-col items-end gap-5  font-medium'>
                        <h3>Username:</h3>
                        <h3>Email:</h3>
                        <h3>Password:</h3>
                        <h3>Again Password:</h3>
                    </div>
                    <div className='flex flex-col items-start gap-4'>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder='Enter Your Username'
                            className='border-2 border-gray-400 px-4 rounded'
                        />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter Your Email'
                            className='border-2 border-gray-400 px-4 rounded'
                        />
                        <input
                            type="password"
                            value={rePassword}
                            onChange={(e) => setRePassword(e.target.value)}
                            placeholder='Enter Your Password'
                            className='border-2 border-gray-400 px-4 rounded'
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Re-enter Password'
                            className='border-2 border-gray-400 px-4 rounded'
                        />
                    </div>
                </div>
                <p className={error ? "text-red-500 text-sm" : "text-transparent"}>{error}</p>
                <button onClick={handleSignUp} disabled={loading} className='w-full border-b-4 bg-[#FBC399] rounded-4xl border-[#EA9975] text-white p-2'>
                    {loading ? 'Registering...' : 'Sign Up'}
                </button>
                <p>Do you have an account? <Link to={"/signin"} className="text-[#EA9975] font-bold cursor-pointer underline">Sign In</Link></p>
            </div>
        </div>
    )
}
