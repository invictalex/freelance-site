import Section from "../general/Section.jsx"


export default function ComparisonTable(props){

    const workTypesArr = props.workType

    const workTypes = workTypesArr.map((type, i) => {
        
        const { heading, bulletPoint } = type

        const bulletPoints = bulletPoint.map((point, i) => (
        
            <li 
                key={i}
                className="border-b border-white border-solid py-5 last-of-type:border-none"
            >
                {point.text}
            </li>
            )
        )
        
        return(
            <div 
                key={i}
                className={`rounded-lg p-6 ${i === 1 && "border-4 border-solid border-blue text-white"}`}
            >
                <h6 className="border-b-2 border-white border-solid pb-5 text-2xl font-semibold">
                    {heading}
                </h6>
                <ul
                >
                    {bulletPoints}
                </ul>
            </div>
        )
    })

    return(
        <div className="min-h-screen py-24 border-box text-white">
            <Section slot={
                <h2 className="text-4xl font-bold">{props.heading}</h2>
            }/>

            <Section slot={
                <div className="flex gap-5 justify-center">
                        {workTypes}
                </div>
            }/>
        </div>
    )
}