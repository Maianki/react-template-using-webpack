import "./style.css"
import box from "./box.png"
import winner from "./winner.svg"

export default function App(){
    return(
        <>
            <h1>React Typescript template by Ankit Kumain</h1>
            <div className="assets">
                <img src={box} alt="open box"></img>
                <img src={winner} alt="win poster"></img>
            </div>
        </>   
    )
}