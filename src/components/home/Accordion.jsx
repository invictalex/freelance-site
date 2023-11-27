import { useState } from "react"
import { motion } from "framer-motion"

export default function Accordion({content}){


    var downArrow = "/src/images/downArrow.svg"

    const initialStatus = content.map(item => 0)

    const [display, setDisplay] = useState(initialStatus)

    function manageStatus(i) {

        var newArr = [];

        var newVal;

        for (let j=0; j<display.length; j++){
            if (j === i){
                newVal = display[i] ? 0 : 1
            } else {
                newVal = 0
            }
            newArr.push(newVal)
        }

        setDisplay(newArr)
    }

    const servicesList = content.map(({item, description}, i) => (
        <motion.div key={i} 
            className=" border-b border-blue-lt relative overflow-hidden h-16 hover:cursor-pointer group"
            onClick={() => manageStatus(i)}

            animate={{height: display[i] ? "auto" : "4rem"}}
            initial={{height: "4rem"}}
        >
            <div className="flex items-center justify-between  my-5">
                <h3 className="text-lg  font-semibold group-hover:underline ">
                    {item}
                </h3>
                <img 
                src={downArrow} className="w-7 h-7 duration-150"
                style={display[i] ? {transform: "rotate(180deg)"} : {transform: "rotate(0deg)"}}
                />

            </div>
            
            <p className="mb-5 ">
                {description}
            </p>
            
        </motion.div>
    ))

    return(
        <div className="space m-auto max-w-xl w-1/3 min-w-[20rem]">
            {servicesList}
        </div>
    )
}