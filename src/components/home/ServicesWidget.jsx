import Accordion from "./Accordion.jsx"

export default function ServicesWidget({content}){

        const {heading, service} = content
        
        return(
                <section className="bg-slate-dark text-white ">
                        <div className="container flex flex-col items-center">
                                <h2 className="space w-full text-left text-4xl font-bold" slot="heading">
                                        {heading}
                                </h2>

                                <div className="py-16">
                                        <Accordion content={service}/>

                                </div>

                                <button className="text-center py-2 px-4 bg-blue text-black text-lg font-semibold rounded-full hover:bg-white duration-200 "><a href="/services">Services Hub</a></button>
                
                        </div>
                       
  
                </section>

        )
}

