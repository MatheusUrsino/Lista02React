import './css/btnStyle.css'

function BtnComponent(props)
{
    return(
        <>
        <div className="btn">
        <button> <a href={props.link}>{props.btn}</a></button>
        </div>
        </>
    )
}

export default BtnComponent;