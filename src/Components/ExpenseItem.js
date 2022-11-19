import './ExpenseItem.css'

export function ExpenseItem({name, price, img}){

    return (
        <div>
            <div> 
                <p>{name}</p>
                <p>{price}</p>
                </div>
            <img src={img}/>
        </div>
    )
}