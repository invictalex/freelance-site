import Section from "../general/Section.jsx"
import tick from "../../images/tick.svg"
import cross from "../../images/cross.svg"


export default function ComparisonTable({content}){

    const {headline, workType} = content

    const table = workType.map(({heading: tableHead, bulletPoint: td}, i) => {
        
        const tableData = td.map((dataPoint, i) => (
        
            <li 
                key={i}
                className="border-b border-white border-opacity-40 border-solid py-5 last-of-type:border-none flex gap-2 items-sart"
            >
                <img src={dataPoint.tick ? tick.src : cross.src} alt="tick" className={dataPoint.tick ? "w-4 h-4 mt-1" : "w-3 h-3 mt-2"}/>

                {dataPoint.text}
            </li>
            )
        )
        
        return(
            <div 
                key={i}
                className={`rounded-lg p-6 ${i === 1 && "bg-purple bg-opacity-40 text-white"}`}
            >
                <h6 className="border-b-2 border-white border-solid pb-5 text-2xl font-semibold">
                    {tableHead}
                </h6>
                <ul>
                    {tableData}
                </ul>
            </div>
        )
    })

    return(
        <section className="text-white">
            <div className="container">

                <h2 className="text-4xl font-bold mb-5">
                    {headline}
                </h2>

                <div className="space h-2 rounded-xs w-[200px] bg-red"></div>



                <div className="flex gap-5 justify-center">
                    {table}
                </div>
            </div>


        </section>
    )
}