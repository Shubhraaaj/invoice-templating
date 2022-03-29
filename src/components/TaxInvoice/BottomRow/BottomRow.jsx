import Details from "../../Elements/Details/Details";

export default function BottomRow () {
    return (
        <div className="border-2">
            <h1 className="bg-slate-200 py-1 font-medium text-center text-black mb-4">UNIT DETAILS</h1>
            <div className="p-4">
                <Details title="Project Name" text="Joyville Kolkata"/>
                <Details title="Costumer Details & Unit Number" text="P.S.Srijan Corporate Park at Unit # 0903 Tower – 1,Plot No.:G-2,Block – GP, Sector – V Bidhannagar, Salt Lake, Kolkata – 700 091"/>
            </div>
        </div>
    );  
}