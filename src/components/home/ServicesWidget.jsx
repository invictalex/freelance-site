import Section from "../general/Section.jsx"
import Accordion from "./Accordion.jsx"

export default function ServicesWidget(props){
        return(
                <div className="w-full h-screen bg-dark-slate text-white py-24">
                        <Section slot={
                                <h2 className="text-4xl font-bold" slot="heading">{props.heading}</h2>
                        }/>

                        <Section slot={
                                <Accordion items={props.items}/>
                        }/>

                        <section className="pt-32 flex justify-center align-center">
                                <button className="py-2 px-4 bg-orange text-lg font-semibold rounded-full">Full Breakdown</button>
                        </section>
                </div>
        )
}

