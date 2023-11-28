import  { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"


export default function ContentSwitcher({content}){


    const backToTop = () => window.scrollTo({ top: 0 })

    const [currentIndex, setCurrentIndex] = useState(0);

    const { serviceName, image, paragraph } = content[currentIndex]

    const serviceNamesArray = content.map((item) => (item.serviceName))

    
    
    return(
            <>

                <div className="container h-96 text-white flex items-end justify-between relative overflowy-hidden overflow-hidden lg:overflow-visible">
                    
                    <AnimatePresence mode="wait">
                    <motion.div 
                        className="w-2/3 sm:w-full flex flex-col gap-5 z-20 "
                        key={currentIndex}
                        initial={{opacity: 0, x: -100}}
                        animate={{opacity: 1, x:0}}
                        exit={{opacity: 0,  x: -100}}
                        transition={{ease: "linear", duration:0.2}}
                    >
                        <h5 className="text-4xl font-semibold">Services</h5>
                        <div className="h-1 w-[150px] bg-red" />
                        <h1 className="text-6xl font-bold text-blue max-sm:text-5xl">{serviceName}</h1>
                        <p>
                            {serviceNamesArray.map((item, i) => (
                                <span 
                                    key={i} 
                                    className={`${i !== currentIndex ? "cursor-pointer" : " font-bold cursor-default" } opacity-80 italic`}
                                    onClick={() => setCurrentIndex(i)}
                                >
                                    {item} {i !== serviceNamesArray.length -1 && `  |   ` } 
                                </span>
                            ))}
                        </p>

                        <div className="flex gap-5 mb-8 mt-2 sm:mt-12">
                            {serviceNamesArray.map((item, i) => (
                                <span 
                                    key={i} 
                                    className={`${i === currentIndex ? "bg-red cursor-default" : "cursor-pointer border border-white border-opacity-70"} block h-6 w-6 rounded-full`}
                                    onClick={() => setCurrentIndex(i)}
                                >
                                </span>
                            ))}
                        </div>
                    </motion.div>
                    </AnimatePresence>
                    {/*<div className="opacity-0 sm:opacity-0 w-screen h-96 bg-black absolute top-0 right-0 z-10"></div>*/}


                    <AnimatePresence mode="wait">
                        <motion.img 
                            src={image} 
                            className="w-[30rem] -mb-20 max-lg:w-[20rem] max-lg:mb-0 max-md:-mr-28 max-sm:!opacity-70"
                            alt="banner-image"
                            key={currentIndex}
                            initial={{opacity: 0, x: 100}}
                            animate={{opacity: 1, x:0}}
                            exit={{opacity: 0,  x: 100}}
                            transition={{ease: "linear", duration:0.2}}
                            
                        />
                    
                    </AnimatePresence>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        className="-mt-2"
                        key={currentIndex}
                        initial={{height:100}}
                        animate={{height:1}}
                        exit={{height:100}}
                        transition={{ease: "linear", duration:0.2}}
                    />
                </AnimatePresence>

                <section className="bg-white">

                    <AnimatePresence mode="wait">
                        <motion.div
                            className="container"
                            key={currentIndex}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{ease: "linear", duration:0.2}}
                        >
                            {paragraph.map((para, i) => (
                                <div  
                                    key={i}
                                >
                                    <h4>{para.heading}</h4>
                                    <p>{para.text}</p>
                                </div>
                            ))}
                            <p className="mr-10 text-right text-lg cursor-pointer font-bold text-purple mt-20" onClick={backToTop}>More services</p>
                        </motion.div>
                    </AnimatePresence>

                    
                </section>
            </>
        
        )
}