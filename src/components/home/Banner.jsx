import {AnimatePresence, motion} from "framer-motion"
import { useState } from "react"

export default function Banner({content}){
    const icons = ["/src/images/laptop.svg", "/src/images/bolt.svg", "/src/images/location.svg"]

    const {info, headline, image} = content

    const [displayItem, setDisplayItem] = useState(0)

    
    setTimeout(function(){
        setDisplayItem((prev) => (prev === info.length - 1 ? 0 : prev+1))
    }, 3000)
    


    const infoList = info.map((item, i) =>{
        return (
            <li key={i}
                className="text-xl"
            >
                {item}
                <img src={icons[i]} alt="" className="w-6 h-6 inline-block ml-4" />
            </li>
        )
    } )

    return(
        <section className="h-[calc(100vh-5rem)] text-white overflow-hidden">

            <div className="container h-full sm:flex sm:gap-10md:items-center">

                <div className="basis-1/2 flex flex-col gap-10 justify-center relative z-10">

                    <h1 className="font-bold text-5xl text-blue">
                        {headline}
                    </h1>

                    <div className="h-2 w-[60%] bg-red" />

                    <ul className="max-sm:hidden space-y-6 md:w-[65%] min-w-[200px]">
                        {infoList}
                    </ul>
                    
                    <ul className="sm:hidden space-y-6 w-[65%] min-w-[200px]">
                        <AnimatePresence mode="wait">
                            <motion.li  
                                key={displayItem}
                                className="text-2xl"
                                initial={{opacity: 0}}
                                animate={{ opacity: 1 }}
                                exit={{opacity:0}}
                                transition={{ duration: 1 }}
                            >
                                {info[displayItem]}
                                <img src={icons[displayItem]} alt="" className="w-6 h-6 block mt-2" />
                            </motion.li>

                        </AnimatePresence>
                    </ul>

                </div>

                <div className="max-lg:absolute max-lg:-right-20 max-lg:-bottom-40 basis-1/2 flex justify-center items-center" >
                    <div
                        className="w-96 h-96 bg-cover" 
                        style={{backgroundImage: `url(${image})`}}>

                    </div>
                </div>
            </div>

        </section>
    )
}