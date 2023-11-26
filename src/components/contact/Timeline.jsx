import { useRef } from "react"
import { motion } from "framer-motion"

export default function Timeline(props) {

   const ref = useRef(null)
     
    const timeline = props.content

    const timelineItems = timeline.map(({item}, i) => (
        <div className="flex items-center z-10 relative" key={i}>
            
            <motion.span className="w-5 h-5 rounded-full outline outline-8 outline-slate mr-10 inline"
            initial={{scale: 0.5, backgroundColor: "rgb(148 161 184)"}}
            whileInView={{scale: 1, backgroundColor: "#fff"}}
            viewport={{root:ref,  margin: "-120px 0px -120px 0px"}}
            ></motion.span>

            <motion.li 
                className={`list-none inline my-8 z-100 `}
                initial={{fontSize: "1rem", opacity: 0.5}}
                whileInView={{fontSize: "1.5rem", opacity: 1}}
                viewport={{root:ref,  margin: "-120px 0px -120px 0px"}}
                
            >
                {item}
            </motion.li>
        </div>
        
    ))


    return(
        <div ref={ref} className="w-full text-white pl-20  h-[300px] overflow-scroll relative scrollbar-hide">
            <span className="absolute h-[620px] w-[2px] bg-blue-lt ml-[0.59rem]"></span>
           <div className="mb-20">
           {timelineItems}

           </div>
        </div>
    )
   
}