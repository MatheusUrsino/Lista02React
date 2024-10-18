import './css/imagesStyle.css'


function ImagesFunction(props)
{
    return(
        <>
        <img src={props.image} alt={props.legenda} />
        </>
    )
}

export default  ImagesFunction;
