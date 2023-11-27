export default function Banner({content}){
    const icons = ["/src/images/laptop.svg", "/src/images/bolt.svg", "/src/images/location.svg"]

    const {info, headline, image} = content

    const infoList = info.map((item, i) =>{
        return (
            <li key={i}
                className="text-xl"
            >
                {item}
                <img src={icons[i]} alt="" className="w-6 h-6 inline-block ml-4" />
            </li>
        )
    } )

    return(
        <section className="h-screen text-white">

            <div className="container flex gap-10 h-full items-center">

                <div className="basis-1/2  flex flex-col gap-10 justify-center">

                    <h1 className="font-bold text-5xl text-blue">
                        {headline}
                    </h1>

                    <div className="h-2  w-[60%] bg-red" />

                    <ul className="space-y-6 w-[65%] min-w-[200px]">
                        {infoList}
                    </ul>

                </div>

                <div className="basis-1/2 flex justify-center items-center" >
                    <div
                        className="w-96 h-96 bg-cover" 
                        style={{backgroundImage: `url(${image})`}}>

                    </div>
                </div>
            </div>

        </section>
    )
}