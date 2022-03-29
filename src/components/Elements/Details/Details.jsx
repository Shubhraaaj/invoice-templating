export default function Details ({ title, text }) {
    return (
        <div className="grid grid-cols-4 grid-rows-1 grid-flow-row-dense mb-2">
            <div className="">
                <h3 className="font-semibold">{title}</h3>
            </div>
            <div className="col-span-3">
                <p className="">{text}</p>
            </div>
        </div>
    );
}