import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

function Results({results}){
    return(
        <FlipMove className='px-2 my-5 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
            {results.map((result) => {
                return <Thumbnail key={result.id} result={result}></Thumbnail>
            })}
        </FlipMove>
    )
}
export default Results;