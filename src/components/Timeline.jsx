import { useRef } from "react"
import { motion } from "framer-motion"
import blueTick from "/src/images/blueTick.svg"
import cube from "/src/images/cube.svg"

export default function Timeline({content}) {

   const ref = useRef(null)
     

    const timeline = content.map(({item}, i) => (
        <div className="flex items-center z-10 relative" key={i}>
            
            <motion.div
                className="w-9 h-9 z-20 bg-cover mr-8"
                initial={{backgroundImage: `url(${cube.src})`, scale: 0.7}}
                whileInView={{backgroundImage: `url(${blueTick.src})`, scale: 1}}
                viewport={{root:ref}}
            />
            {i !== content.length -1 &&
                <span className="absolute top-16 left-4 h-[6.5rem] w-[2px] bg-white bg-opacity-50"></span>}

            <motion.li 
                className={`list-none inline my-10 z-100 `}
                initial={{fontSize: "1rem", opacity: 0.5}}
                whileInView={{fontSize: "1.5rem", opacity: 1}}
                viewport={{root:ref}}
                
            >
                {item}
            </motion.li>
        </div>
        
    ))


    return(
        <div ref={ref} className="w-80 pb-64 h-[400px] overflow-scroll scrollbar-hide">
            {timeline}
        </div>
    )
   
}