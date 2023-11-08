export default function Banner(props){
    const icons = ["/src/images/laptop.svg", "/src/images/bolt.svg", "/src/images/location.svg"]

    const info = props.info

    const infoListItems = info.map((item, i) =>{
        return (
            <li key={i}
                className="text-lg"
            >
                {item}
                <img src={icons[i]} alt="" className="w-5 h-5 inline-block ml-4" />
            </li>
        )
    } )

    return(
        <div className="banner w-full h-screen flex ">
            

            <div className="basis-1/2">
                <div className="absolute top-1/2 -translate-y-1/2  w-full max-w-7xl m-auto left-0 right-0 px-5">
                    <div className="pr-5 w-1/2 space-y-16">
                        <h1 className="font-bold text-5xl">{props.heading}</h1>
                        <ul className="space-y-6 w-96">
                            {infoListItems}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="basis-1/2 " style={{backgroundImage: `url(${props.image})`, backgroundPosition: "center"}}>
                <div className="h-full w-1/4 bg-black opacity-40" />
            </div>
        </div>
    )
}