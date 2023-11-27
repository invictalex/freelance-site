import  { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"


export default function ContentSwitcher({content}){

    const arrow = "/src/images/leftArrow.svg"

    const backToTop = () => window.scrollTo({ top: 0 })

    const [currentIndex, setCurrentIndex] = useState(0);

    const changeService = (i) => {
        setCurrentIndex(i)
    }

    
    const { serviceName, image, paragraph } = content[currentIndex]

    const serviceNamesArray = content.map((item) => (item.serviceName))

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
            <>
                <div className="h-96 text-white flex items-end relative overflow-hidden">
                    <AnimatePresence mode="wait">
                    <motion.div 
                        className="container flex flex-col gap-5 z-10"
                        key={currentIndex}
                        initial={{opacity: 0, x: -100}}
                        animate={{opacity: 1, x:0}}
                        exit={{opacity: 0,  x: -100}}
                        transition={{type: "spring", duration:0.4}}
                    >
                        <h5 className="text-4xl font-semibold">Services</h5>
                        <div className="h-1 w-[150px] bg-red" />
                        <h1 className="text-6xl font-semibold text-blue">{serviceName}</h1>
                        <p>
                            {serviceNamesArray.map((item, i) => (
                                <span 
                                    key={i} 
                                    className={`${i !== currentIndex ? "cursor-pointer" : " font-bold cursor-default" } italic`}
                                    onClick={() => setCurrentIndex(i)}
                                >
                                    {item} {i !== serviceNamesArray.length -1 && `  |   ` } 
                                </span>
                            ))}
                        </p>

                        <div className="flex gap-5 mb-8 mt-12">
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

                    <AnimatePresence mode="wait">
                    <motion.img 
                        src={image} 
                        alt="banner-image"
                        className="absolute -right-16 -bottom-20 z-0"
                        key={currentIndex}
                        initial={{opacity: 0, x: 100}}
                        animate={{opacity: 1, x:0}}
                        exit={{opacity: 0,  x: 100}}
                        transition={{type: "spring", duration:0.4}}
                    />
                    </AnimatePresence>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                    key={currentIndex}
                    initial={{height:100}}
                    animate={{height:5}}
                    exit={{height:100}}
                    transition={{type: "spring", duration:0.4}}
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
                            transition={{type: "spring", duration:0.4}}
                        >
                            {paragraph.map((para, i) => (
                                <div  
                                    key={i}
                                >
                                    <h4>{para.heading}</h4>
                                    <p>{para.text}</p>
                                </div>
                            ))}
                            <p className="text-right text-lg cursor-pointer font-bold text-purple mt-20" onClick={backToTop}>More services</p>
                        </motion.div>
                    </AnimatePresence>

                    
                </section>
            </>
        
        )
}