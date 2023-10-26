import React from "react"

export default function Banner(props){

    const info = props.info

   const arr = ["hi", "hello"]

    const jsx = arr.map(item =>{
        return (
            <li>Hello</li>
        )
    } )

    return(
        <div className="banner w-full h-screen flex">

            <div className="basis-1/2 flex items-center justify-center">
                <div>
                    <h1 className="font-bold">{props.heading}</h1>
                    
                    <ul>
                        {jsx}
                    </ul>
                </div>
            </div>
            <div className="basis-1/2 " style={{backgroundImage: `url(${props.image})`, backgroundPosition: "center"}}>
                <div className="h-full w-1/4 bg-black opacity-40">

                </div>
            </div>
        </div>
    )
}