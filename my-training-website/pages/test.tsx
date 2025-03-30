
import {Montserrat} from "next/font/google";

const montserrat = Montserrat({
    subsets:['latin'],
    weight:'400'
});



export default function Test(){
    return(
        <div >
            <p>
            hi, this is test for font
            </p>
        </div>
    );
}