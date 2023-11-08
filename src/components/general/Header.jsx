import BurgerMenu from "./BurgerMenu.jsx"

const navLinks = (await Astro.glob("../../pages/content/*"))
const slider = "after:block after:w-0 after:h-px after:bg-black after:duration-300 hover:after:w-full"

import * as assets from "../../pages/content/assets.md"


export default function Header(){

    return(
        <nav className="fixed z-20 top-0 left-0 h-20 w-full  px-5 flex justify-center">

            <div className="w-full max-w-7xl flex justify-between items-center m-auto">
                <a href="/"><img src={assets.frontmatter.headerLogo} className="h-auto w-16" /></a>

                <div id="reg-menu" className="flex gap-5">
                    {navLinks.map(navLink => (
                        <a className={`lowercase ${slider}`} href={navLink.url}>{navLink.frontmatter.title}</a>
                    ))}
                    <a href="/contact" className={slider}>contact</a>
                </div>
                    
                <BurgerMenu 
                    client:visible 
                    navLinks={navLinks}
                />
            </div>

        </nav>
    )
}



    
   