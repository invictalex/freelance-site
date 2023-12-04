import { motion } from "framer-motion"
import {useState} from "react"

export default function BurgerMenu(){

    const prongStyle = "block h-0.5 w-8 bg-white"
    
    const [menuTray, setMenuTray] = useState(false)

    return(
        <div className="relative z-10 lg:hidden">
            <div className="z-100 space-y-1.5 hover:cursor-pointer relative z-10" onClick={() => setMenuTray(prev => !prev)}>
                <motion.span animate={menuTray ? {rotateZ: 45, y: 8} : {rotateZ: 0, y: 0}} className={prongStyle}></motion.span>
                <motion.span animate={{width: menuTray ? 0 : 24}} className={prongStyle}></motion.span>
                <motion.span animate={menuTray ? {rotateZ: -45, y: -8, width: 32} : {rotateZ: 0, y: 0, width: 24}} className={prongStyle}></motion.span>
            </div>
    
            {menuTray && (
            <motion.div 
                animate={{opacity: 1}}
                initial={{opacity: 0}}
                className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-slate-dark"
            >
                <motion.ul 
                    className="flex flex-col gap-5 items-center"
                    animate={{x:0}}
                    initial={{x:35}}
                >
                    <li><a href="/" className="text-white text-lg">home</a></li>
                    <li><a href="/services" className="text-white text-lg ">services</a></li>
                    <li><a href="/contact" className="text-lg px-4 pb-1 pt-[0.1rem] text-black bg-blue rounded-full">get started</a></li>
                </motion.ul>
            </motion.div>
        )}
        </div>
    )
}