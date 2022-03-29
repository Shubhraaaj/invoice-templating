import Details from "../Elements/Details/Details";

export default function PaymentDetails () {
    return (
        <div className="border-2 my-4">
            <h1 className="bg-slate-200 py-1 font-medium text-center text-black mb-4">PAYMENT DETAILS</h1>
            <div className="p-4">
                <Details title="Payee Name" text="Rs.980709"/>
                <Details title="Bank Name" text="Rs.7979960"/>
                <Details title="Branch Address" text="Rs.5679"/>
                <Details title="Account Type" text="Rs7877"/>
                <Details title="Account Number" text="Rs.89078"/>
                <Details title="IFSC Code" text="Rs.18,00,000"/>
            </div>
        </div>
    );  
}