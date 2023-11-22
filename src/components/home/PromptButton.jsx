import { useState } from "react"
import {motion} from "framer-motion"
import rightArrow from "/src/images/rightArrow.svg"

export default function PromptButton(){



    const [hovered, setHovered] = useState(false)



    return(
        <div className="w-full flex justify-center items-center">
            <div className="w-48 h-16 border-2 border-white rounded-full bg-white duration-300 outline outline-2 outline-slate"
                style={!hovered ? {outline: "solid 2px #f2f2f2"} : {outline:"solid 2px #5F6D8A"}}
            >
                <motion.div 
                    className="h-full w-40 bg-slate text-white rounded-full cursor-pointer flex justify-start items-center border-box"
                    whileHover={{width: "100%", opacity: 1, backgroundColor: "#f2f2f2", color: "black"}}
                    onMouseEnter={() => setHovered(prev => !prev)}
                    onMouseLeave={() => setHovered(prev => !prev)}
                >
                    <h6 
                        className=" text-xl font-semibold inline duration-200"
                        style={{marginLeft: hovered ? "2.5rem" : "1.8rem"}}
                    >
                        Get Started
                    </h6>
                    {hovered &&  <motion.img id="arrow"
                        initial={{opacity: 0, width: 0}}
                        animate={{opacity: 1, width: "1.5rem"}}
                        src="/src/images/rightArrow.svg"
                        className="w-6 ml-2 inline " 
                    transition={{duration: 0.2}}

                    ></motion.img>}
                   
                </motion.div>

            </div>
        </div>
    )
}