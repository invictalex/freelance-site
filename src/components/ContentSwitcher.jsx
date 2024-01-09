import  { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Markdown from "react-markdown"
import upArrow from "/src/images/upArrowLong.svg"



export default function ContentSwitcher({contentTwo}){

    const backToTop = () => window.scrollTo({ top: 0 })

    const [currentIndex, setCurrentIndex] = useState(0);

    contentTwo.sort((a, b) => {
        return a.data.displayNumber - b.data.displayNumber;
    })

    const { data: {title, image}, body } = contentTwo[currentIndex]

    const serviceNames = contentTwo.map((item) => (item.data.title))

    
    return(
            <>
                <div className="container h-[75vh] max-h-[600px] text-white flex items-start mt-8 justify-between relative overflow-hidden sm:h-96 sm:items-end sm:mt-0 lg:overflow-visible">
                    
                    <AnimatePresence mode="wait">
                    <motion.div 
                        className="w-5/6 flex flex-col gap-5 z-20 sm:w-2/3 sm:mb-20 lg:w-full "
                        key={currentIndex}
                        initial={{opacity: 0, x: -100}}
                        animate={{opacity: 1, x:0}}
                        exit={{opacity: 0,  x: -100}}
                        transition={{type: "spring", duration: "0.5"}}
                    >
                        <h3 className="font-semibold">Services</h3>
                        <div className="h-[6px] w-[150px] bg-red" />
                        <h1 className="font-bold text-blue max-sm:text-5xl">{title}</h1>
                        <p >
                            {serviceNames.map((item, i) => (i!== currentIndex &&
                                <span 
                                    key={i} 
                                    className="block remainingServices opacity-80 italic hover:opacity-100 cursor-pointer sm:inline"
                                    onClick={() => setCurrentIndex(i)}
                                >
                                    {item}   
                                    <span className="divider mx-2">|</span>
                                    
                                </span>
                            ))}
                        </p>
                    </motion.div>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                        {image &&<motion.img 
                            src={image} 
                            className="absolute -right-24 -bottom-16 w-80 lg:w-[27rem] lg:right-0 lg:-bottom-20 "
                            alt="banner-image"
                            key={currentIndex}
                            initial={{opacity: 0, x: 100}}
                            animate={{opacity: 1, x:0}}
                            exit={{opacity: 0,  x: 100}}
                            transition={{type: "spring", duration: "0.5"}}
                            width="476"
                            height="485"
                            decoding="async"
                            loading="lazy"
                        />}
                    </AnimatePresence>
                    
                    <div className="flex gap-5 absolute bottom-8 left-5 z-20">
                        {serviceNames.map((item, i) => (
                            <span 
                                key={i} 
                                className={`${i === currentIndex ? "bg-red cursor-default" : "cursor-pointer border border-white border-opacity-70"} block h-6 w-6 rounded-full`}
                                onClick={() => setCurrentIndex(i)}
                            >
                            </span>
                        ))}
                    </div>

                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        className="-mt-2"
                        key={currentIndex}
                        initial={{height:100}}
                        animate={{height:1}}
                        exit={{height:100}}
                        transition={{type: "spring", duration: "0.5"}}
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
                            transition={{type: "spring", duration: "0.5"}}
                        >
                            <div className="markdown">
                                <Markdown>
                                    {body}
                                </Markdown>
                            </div>

                            <p className="pt-20 text-right text-lg font-bold" >
                                <span onClick={backToTop} className="cursor-pointer mt-20">
                                    More services
                                    <img src={upArrow.src} className="w-5 h-5 inline mb-2 ml-2"/>
                                </span>
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    
                </section>
            </>
        
        )
}