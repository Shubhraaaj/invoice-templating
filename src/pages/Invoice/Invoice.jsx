import BrokerageDetails from "../../components/BrokerageDetails/BrokerageDetails";
import Details from "../../components/Elements/Details/Details";
import PaymentDetails from "../../components/PaymentDetails/PaymentDetail";
import BottomRow from "../../components/TaxInvoice/BottomRow/BottomRow";
import LeftColumn from "../../components/TaxInvoice/LeftColumn/LeftColumn";
import RightColumn from "../../components/TaxInvoice/RightColumn/RightColumn";

export default function Invoice(){
    return (
        <div className="py-4">
            <section className="text-left flex flex-col justify-center">
                <h1 className=" w-[90%] py-[10px] self-center rounded-sm bg-blue-900 text-center text-white font-semibold">
                    TAX INVOICE
                </h1>
                <div className="grid grid-cols-2 space-x-4 pt-4 px-[5%]">
                    <LeftColumn />
                    <RightColumn />
                </div>
                <div className="pt-4 px-[5%]">
                    <BottomRow />
                    <BrokerageDetails />
                    <PaymentDetails />
                </div>
            </section>
        </div>
    );
}