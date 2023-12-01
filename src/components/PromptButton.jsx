import { useState } from "react"
import {motion} from "framer-motion"

export default function PromptButton(){

    const [hovered, setHovered] = useState(false)

    return(
        <div >
            <div className="w-48 h-16 border-2 border-slate rounded-full bg-slate outline outline-2 outline-blue border-box hover:outline-white" >
                <motion.div 
                    className="h-full w-40 bg-white rounded-full cursor-pointer flex justify-start items-center border-box"
                    whileHover={{width: "100%", opacity: 1, backgroundColor: "#95C0D1"}}
                    onMouseEnter={() => setHovered(prev => !prev)}
                    onMouseLeave={() => setHovered(prev => !prev)}
                >
                    <h6 
                        className=" text-xl text-black font-semibold inline duration-200 ml-9"
                        style={{marginLeft: hovered ? "2.5rem" : "1.8rem"}}
                    >
                        Get Started
                    </h6>
                    {hovered &&  <motion.img id="arrow"
                        initial={{opacity: 0, width: 0}}
                        animate={{opacity: 0.7, width: "1.5rem"}}
                        src="/src/images/rightArrow.svg"
                        className="w-6 ml-2 inline" 
                        transition={{duration: 0.2}}

                    ></motion.img>}
                   
                </motion.div>

            </div>
        </div>
    )
}