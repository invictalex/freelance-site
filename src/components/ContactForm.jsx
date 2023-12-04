import { useState } from "react"
import palette from "/src/images/palette.svg"
import website from "/src/images/website.svg"
import content from "/src/images/content.svg"

export default function ContactForm(){

    
    var inputStyles = "!mt-2 pl-2 w-full border rounded-md border-[240 5.9% 90%] bg-transparent h-10"
    var checkboxStyles = "w-32 h-24 border-[240 5.9% 90%] border-2 rounded-lg relative flex flex-col justify-center items-center hover:border-gray-300 duration-300"
    
    const [checkboxes, setCheckboxes] = useState({
        branding: false,
        website: false,
        content: false
    })

    const handleChange = (e) => {

       const {name, checked } = e.target

        setCheckboxes((prevCheckboxes) => {
            return {
                ...prevCheckboxes,
                [name]:checked
            }
        })

    }

    return(

        <div className="w-full max-w-md bg-white flex justify-center px-5 py-8 rounded-lg border relative ">
            <form className="flex flex-col items-start justify-start w-full space-y-5" netlify name="contact" method="POST">
                <h1 className="font-bold text-2xl text-slate text-start">
                    Get in touch
                </h1>

                <p className="text-slate opacity-60">
                    Fill out this quick form and I'll be in touch shortly
                </p>
                
                <label htmlFor="name" className="text-slate font-semibold">
                    Name
                </label>
                <input 
                    type="text" 
                    className={inputStyles}
                    name="name"
                />

                <label htmlFor="email"  className="text-slate font-semibold">
                    Email
                </label>
                <input 
                    type="email" 
                    className={inputStyles}
                    name="email"
                />

                {/*CHECKBOXES*/}
                <p className="text-slate font-semibold">Services</p>

                <div className="flex justify-between w-full gap-4">
                    <label 
                        htmlFor="branding"
                        className={checkboxStyles}
                        style={{border: checkboxes.branding && "solid 2px #31343B"}}
                    >
                        <input 
                            type="checkbox"
                            name="branding"
                            className="cursor-pointer absolute z-20 w-full h-full opacity-0"
                            onChange={handleChange}
                        />
                        <img src={palette.src} className="w-6 h-6" />
                        <p className="font-semibold mt-2 text-slate">Branding</p>
                        
                    </label>

                    <label 
                        htmlFor="website"
                        className={checkboxStyles}
                        style={{border: checkboxes.website && "solid 2px #31343B"}}
                    >
                        <input 
                            type="checkbox"
                            name="website"
                            className="cursor-pointer absolute z-20 w-full h-full opacity-0"
                            onChange={handleChange}
                        />
                        <img src={website.src} className="w-6 h-6" />
                        <p className="font-semibold mt-2 text-slate">Website</p>

                    </label>

                    <label 
                        htmlFor="content"
                        className={checkboxStyles}
                        style={{border: checkboxes.content && "solid 2px #31343B"}}
                    >
                        <input
                            type="checkbox"
                            name="content"
                            className="cursor-pointer absolute z-20 w-full h-full opacity-0"
                            onChange={handleChange}
                        />
                        <img src={content.src} className="w-6 h-6" />
                        <p className="font-semibold mt-2 text-slate">Content</p>

                    </label>
                    
                </div>
                
                <button type="submit" className="w-full py-1 px-5 bg-slate text-white font-semibold rounded-lg h-10 mt-20
                hover:bg-black duration-200">
                    Send
                </button>
            </form>
        </div>
    )
}