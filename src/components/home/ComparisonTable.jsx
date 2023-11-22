import Section from "../general/Section.jsx"


export default function ComparisonTable(props){

    const optionsArr = props.options

    const options = optionsArr.map((type, i) => {
        
        const heading = type.workTypeItem.heading
        const pointsArr = type.workTypeItem.item /*should be an array*/
        const points = pointsArr.map((point, i) => (
        
            <li 
                key={i}
                className="border-b border-black border-solid py-5 last-of-type:border-none"
            >
                {point}
            </li>
            )
        )
        
        return(
            <div 
                key={i}
                className={`rounded-lg p-6 ${i === 1 && "border-2 border-solid border-black text-black"}`}
            >
                <h6 className="border-b-2 border-black border-solid pb-5 text-2xl font-semibold">
                    {heading}
                </h6>
                <ul
                >
                    {points}
                </ul>
            </div>
        )
    })

    return(
        <div className="min-h-screen py-24 border-box text-black bg-white">
            <Section slot={
                <h2 className="text-4xl font-bold">{props.heading}</h2>
            }/>

            <Section slot={
                <div className="flex gap-5 justify-center">
                        {options}
                </div>
            }/>
        </div>
    )
}