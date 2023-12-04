import Accordion from "./Accordion.jsx"
import {motion} from "framer-motion"

export default function ServicesWidget({content}){

        const {heading, service} = content
        
        return(
                <section className="bg-slate-dark text-white ">
                        <motion.div 
                                className="container flex flex-col items-center"
                                initial={{opacity:0, y: 100 }}
                                whileInView={{opacity:1, y:0}}
                                transition={{duration:1, type:"spring", delay:0.2}}
                                viewport={{ once: true }}
        
                        >
                                <h3 className="space w-full text-left" slot="heading">
                                        {heading}
                                </h3>

                                <div className="py-16">
                                        <Accordion content={service}/>

                                </div>

                                <button className="text-center py-2 px-4 bg-blue text-black text-lg font-semibold rounded-full hover:bg-white duration-200 "><a href="/services">Services Hub</a></button>
                
                        </motion.div>
                       
  
                </section>

        )
}

