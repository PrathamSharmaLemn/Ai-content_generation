import React from "react";
import { Search } from "lucide-react";

function SearchSection({onSearchInput}:any){
    return (
        <div className="p-10 bg-gradient-to-br flex flex-col justify-center items-center text-white
        // from-green-500 via-green-400 to-green-200  "
        style={{background: "linear-gradient(to bottom right, #629460, #96be8c, #c9f2c7)"}}
        >
            <h2 className="text-3xl font-bold">Browse All Templates</h2>
            <p>What would you like to create today?</p>
            <div className="w-full flex justify-center">
                <div className="flex gap-2 items-center p-2 border rounded-md
                bg-white my-5 w-[60%]">
                    <Search className="text-primary"/>
                    <input type="text" placeholder="Search" 
                    onChange={(event)=>onSearchInput(event.target.value)}
                    className="bg-transparent w-full outline-none text-black"/>
                </div>
            </div>
        </div>
    )
}

export default SearchSection