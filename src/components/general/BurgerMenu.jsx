import { motion } from "framer-motion"
import {useState} from "react"

export default function BurerMenu(){

    
    const [menuTray, setMenuTray] = useState(false)

    return(
        <div id="burger-menu" className="relative z-10 hidden">
            <div className="z-100 space-y-1.5 hover:cursor-pointer relative z-10" onClick={() => setMenuTray(prev => !prev)}>
                <motion.span animate={menuTray ? {rotateZ: 45, y: 8} : {rotateZ: 0, y: 0}} className="block h-0.5 w-8 bg-black"></motion.span>
                <motion.span animate={{width: menuTray ? 0 : 24}} className="block h-0.5 w-7 bg-black"></motion.span>
                <motion.span animate={menuTray ? {rotateZ: -45, y: -8, width: 32} : {rotateZ: 0, y: 0, width: 24}} className="block h-0.5 w-6 bg-black"></motion.span>
            </div>
    
            {menuTray && (
            <motion.div 
                animate={{opacity: 1}}
                initial={{opacity: 0}}
                className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-white "
            >
                <motion.div 
                    className="flex flex-col gap-5 items-center"
                    animate={{x:0}}
                    initial={{x:35}}
                >
                    <a href="/">home</a>
                    <a href="/">services</a>
                    <a href="/contact">get started</a>
                </motion.div>
            </motion.div>
        )}
        </div>
    )
}