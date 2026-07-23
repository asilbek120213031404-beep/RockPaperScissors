import { Outlet } from "react-router-dom";


export default function Layout(){
    

    return(
        <>
        <div className="max-w-[400px] ml-auto mr-auto bg-white mt-5 mb-5 min-h-[680px]">
        <Outlet />
        </div>
        </>
    )
}