import tick from "/src/images/tick.svg"
import cross from "/src/images/cross.svg"
import {motion} from "framer-motion"


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
                className={`max-w-sm rounded-lg p-6 ${i === 1 && "bg-purple bg-opacity-40 text-white"}`}
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
            <motion.div 
                className="container"
                initial={{opacity:0, y: 100 }}
                whileInView={{opacity:1, y:0}}
                transition={{duration:1, type:"spring", delay:0.2}}
                viewport={{ once: true }}
            >

                <h3 className="text-4xl mb-5">
                    {headline}
                </h3>

                <div className="space h-2 rounded-xs w-[200px] bg-red"></div>

                <div className="flex gap-5 justify-center max-lg:flex-col max-lg:items-center">
                    {table}
                </div>
            </motion.div>
        </section>
    )
}