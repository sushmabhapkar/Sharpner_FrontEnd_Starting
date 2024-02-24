import "./ExpenseItem.css";
function ExpenseItem()
{
  const ExpenseDate=new Date(2020,2,28);
  const ExpenseTitle="Car Insurance";
  const ExpensePrice=246.78;

    return (
        <div className="expense_item_date">
         <h2>{ExpenseDate.toString()}</h2>
         <div className="expense_item_price">
                <h2>${ExpensePrice}</h2>
           <div className="expense_item_description">
             <h2>{ExpenseTitle}</h2>
             
             </div>
           </div>

        </div>
    

    );

}

export default ExpenseItem;