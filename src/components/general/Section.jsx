export default function Section(props){
    return(
        <section 
            class="w-full max-w-7xl mx-auto mb-20 px-5 relative"
        >
            {props.slot}
        </section>
    )
}


