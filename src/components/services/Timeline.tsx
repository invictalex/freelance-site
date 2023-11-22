import { useRef } from "react"

import { motion } from "framer-motion"

export default function Timeline(props) {

    const ref = useRef(null)
     
    const list = ["Initial enquiry", "Telephone consultation", "Agree timeline & fee",
     "You sign off visual draft", "Product delivered", "2 rounds of feedback & amends", "The product is yours!"]

    const listJSX = list.map((item, i) => (
        <div className="flex items-center z-10 relative">

            <motion.span className="w-5 h-5 rounded-full  mr-10 inline"
            initial={{scale: 0.5, backgroundColor: "rgb(49 52 59)", border: "solid 4px rgb(49 52 59)"}}
            whileInView={{scale: 1, backgroundColor: "rgb(242 242 242)", border: "solid 4px rgb(49 52 59)" }}
            viewport={{ root: ref, margin: "-200px 0px -200px 0px"}}
            ></motion.span>

            <motion.li key={i}
                className="list-none inline my-8 z-100 border-2 border-slate rounded-lg"
                initial={{fontSize: "1rem", opacity: 0.5, padding: "1rem 2rem 1rem 2rem"}}
                whileInView={{fontSize: "1.5rem", opacity: 1,  padding: "2rem 3rem 2rem 3rem"}}
                viewport={{root: ref, margin: "-200px 0px -200px 0px"}}
                
            >
                {item}
            </motion.li>
        </div>
        
    ))


    return(
        <div className="w-full  relative h-[600px] flex justify-center">
            <div ref={ref} className="  pl-20  w-[600px] h-[500px] overflow-scroll scrollbar-hide">
                <span className="absolute h-[2000px] w-[2px] bg-slate ml-[0.59rem]"></span>
                <div className="mb-20">
                
                    {listJSX}

                </div>
            </div>
        </div>
    )
   
}