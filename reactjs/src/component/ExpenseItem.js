import "./ExpenseItem.css";

function ExpenseItem(props)
{
   return (
        <div className="expense_item_date">
         <h2>{props.date.toString()}</h2>
         <div className="expense_item_price">
                <h2>${props.amount}</h2>
           <div className="expense_item_description">
             <h2>{props.title}</h2>
        
             </div>
           </div>

        </div>
    

    );

}

export default ExpenseItem;