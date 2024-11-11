"use client"
import { Button } from "@/components/ui/button";
import React from "react";

function UsageTrack() {
    return (
        <div className="m-5">
            <div className="bg-primary text-white rounded-lg p-3">
                <h2 className="font-medium">Credits</h2>               
                <div className="h-2 bg-[#006D5B] w-full rounded-full mt-3">
                    <div className="h-2 bg-white rounded-full" style={{width:"35%"}}></div>
                </div>
                <h2 className="text-sm my-2 ">350/10,000 Credit Used</h2>
            </div>
            <Button 
                variant="secondary"
                className="w-full my-3 text-primary"
                type="button"
            >
                Upgrade
            </Button>
        </div>
    )
}

export default UsageTrack