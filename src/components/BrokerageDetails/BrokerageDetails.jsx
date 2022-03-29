import Details from "../Elements/Details/Details";

export default function BrokerageDetails () {
    return (
        <div className="border-2 my-4">
            <h1 className="bg-slate-200 py-1 font-medium text-center text-black mb-4">BROKERAGE DETAILS</h1>
            <div className="p-4">
                <Details title="Brokerage @  ...%" text="Rs.980709"/>
                <Details title="Incentive" text="Rs.7979960"/>
                <Details title="Add: SGST @ 9%" text="Rs.5679"/>
                <Details title="Add: CGST @ 9%" text="Rs7877"/>
                <Details title="Add : IGST @ 18 %" text="Rs.89078"/>
                <Details title="Total Bill" text="Rs.18,00,000"/>
            </div>
        </div>
    );  
}