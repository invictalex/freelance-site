import  { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"


export default function ContentSwitcher({content}){

    const arrow = "/src/images/leftArrow.svg"

    const [currentIndex, setCurrentIndex] = useState(0);

    
    const { serviceName, image, paragraph } = content[currentIndex]




    const [direction, setDirection] = useState("")

    const variants = {
        enter: (direction) => (direction === "next" ? { x: 300, opacity: 0 } : { x: -300, opacity: 0 }),
        visible: {
          x: "-50%",
          opacity: 1,
        },
        exit: (direction) => (direction === "next" ? { x: -300, opacity: 0 } : { x: 300, opacity: 0 }),
    };


    const handleNext = () => {
        setDirection("next");
        setCurrentIndex((prevIndex) =>
        prevIndex + 1 === content.length ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setDirection("prev");
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? content.length - 1 : prevIndex - 1
        );
    };
    
    
    return(
            <div className="py-20 flex flex-col items-center gap-10 relative">
                <div className="p-20">
                    <h2 class="text-4xl font-bold text-blue-lt text-center mb-5">Services</h2>
                    <div className="space-y-10 flex flex-col">
                        <div className="w-60 h-60 left-1/2 relative">

                            <AnimatePresence custom={direction} mode="wait">
                                <motion.img src={image}  
                                    key={currentIndex}
                                    variants={variants}
                                    initial="enter"
                                    animate="visible"
                                    exit="exit"
                                    custom={direction}
                                    transition={{ type: "ease", duration: 0.3}}
                                    className="overflow-hidden absolute w-full"
                                />
                            </AnimatePresence>

                        </div>
                
                        <div className="flex justify-between items-center gap-10 text-blue-lt w-96 overflow-hidden relative">
                            <img src={arrow} className="w-5 h-8 cursor-pointer hover:scale-125 duration-300" onClick={handlePrev}/>
                            <AnimatePresence custom={direction} mode="wait">
                                <motion.h6 
                                    key={currentIndex}
                                    variants={variants}
                                    initial="enter"
                                    animate="visible"
                                    exit="exit"
                                    custom={direction}
                                    transition={{ type: "ease", duration: 0.3}}
                                    className="text-2xl font-bold whitespace-nowrap overflow-hidden absolute left-1/2 text-white">
                                        
                                        {serviceName}
                                </motion.h6>
                            </AnimatePresence>
                            
                            <img src={arrow} className="w-5 h-8 transform rotate-180 cursor-pointer hover:scale-125 duration-300" onClick={handleNext}/>
                        </div>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div className="relative w-full h-24 "
                        key={currentIndex}
                        initial={{marginTop: 0}}
                        animate={{marginTop: -120}}
                        exit={{marginTop: 0}}
                        transition={{type: "ease", duration: 0.3}}
                    >
                    </motion.div>
                </AnimatePresence>

                <section className="bg-white z-20 -mt-10 mb-20">

                    <AnimatePresence mode="wait">
                        <motion.div
                            className="container"
                            key={currentIndex}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{type: "ease", duration: 0.3}}
                        >
                            {paragraph.map((para, i) => (
                                <div className="" 
                                    key={currentIndex}
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{duration: 0.3}}
                                >
                                    <h4>{para.heading}</h4>
                                    <p>{para.text}</p>
                                </div>

                            ))}
                        </motion.div>
                    </AnimatePresence>
                </section>
            </div>
        
        )
}