import {AnimatePresence, motion} from "framer-motion"
import { useState } from "react"
import laptop from "/src/images/laptop.svg"
import bolt from "/src/images/bolt.svg"
import location from "/src/images/location.svg"

export default function Banner({content}){
    const icons = [laptop, bolt , location]

    const {info, headline, image} = content

    const [displayItem, setDisplayItem] = useState(0)

    
    setTimeout(function(){
        setDisplayItem((prev) => (prev === info.length - 1 ? 0 : prev+1))
    }, 3000)
    


    const infoList = info.map((item, i) =>{
        return (
            <li key={i}
                className="max-lg:text-2xl  text-xl"
            >
                {item}
                <img src={icons[i].src} alt="" className="w-6 h-6 inline-block ml-4" />
            </li>
        )
    } )

    return(
        <div className="h-[calc(100vh-5rem)] text-white overflow-hidden">

            <div className="container h-full flex sm:gap-10md:items-center">

                <div className="md:max-lg:mt-10 md:max-lg:basis-2/3 lg:basis-1/2 flex flex-col gap-10 justify-center relative z-10">

                    <h1 className="md:max-lg:text-6xl font-bold text-5xl text-blue">
                        {headline}
                    </h1>

                    <div className="h-2 w-[60%] bg-red" />

                    <ul className="max-sm:hidden space-y-6 max-md:w-96 md:w-[65%] min-w-[200px]">
                        {infoList}
                    </ul>
                    
                    <ul className="sm:hidden space-y-6 max-md:w-44  w-[65%]  h-40">
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

                <div className="lg:basis-1/2 lg:flex lg:justify-center lg:items-center" >
                    <div
                        className="absolute bg-cover w-[20rem] h-[20rem] bottom-0 -right-20 md:w-[35rem] md:h-[35rem] md:-bottom-40 lg:static lg:w-96 lg:h-96 " 
                        style={{backgroundImage: `url(${image})`}}>

                    </div>
                </div>
            </div>

        </div>
    )
}