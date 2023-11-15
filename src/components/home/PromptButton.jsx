import { useState } from "react"
import {motion} from "framer-motion"
import rightArrow from "/src/images/rightArrow.svg"

export default function PromptButton(){



    const [hovered, setHovered] = useState(false)



    return(
        <div className="w-full flex justify-center items-center">
            <div className="w-48 h-16 border-2 border-slate rounded-full bg-slate duration-300"
                style={hovered ? {outline: "solid 2px white", border: "solid 2px #e05421"} : {outline:"solid 2px #5F6D8A"}}
            >
                <motion.div 
                    className="h-full w-40 bg-blue rounded-full cursor-pointer flex justify-start items-center border-box"
                    whileHover={{width: "100%", opacity: 1, backgroundColor: "#E05421", color: "white"}}
                    onMouseEnter={() => setHovered(prev => !prev)}
                    onMouseLeave={() => setHovered(prev => !prev)}
                >
                    <h6 
                        className=" text-xl font-semibold inline duration-200 ml-9"
                        style={{marginLeft: hovered ? "3rem" : "2.25rem"}}
                    >
                        Yes, I am
                    </h6>
                    {hovered &&  <motion.img id="arrow"
                        initial={{opacity: 0, width: 0}}
                        animate={{opacity: 1, width: "1.5rem"}}
                        src="/src/images/rightArrow.svg"
                        className="w-6 ml-3 inline invert" 
                    transition={{duration: 0.2}}

                    ></motion.img>}
                   
                </motion.div>

            </div>
        </div>
    )
}