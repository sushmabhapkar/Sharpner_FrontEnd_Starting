import "./ExpenseItem.css";
import "./ExpenseDate.css";

function ExpenseDate(props)
{
    const month = props.date.toLocaleString("en-US", { month: "long" });
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    const year = props.date.getFullYear();

    return(
        <div className="expense_item_date">
        <div className="expense-date_month"><h3>{month}</h3></div>
        <div className="expense-date_day"><h3>{day}</h3></div>
        <div className="expense-date_year"><h3>{year}</h3></div>
        
      </div>
    );
}
export default ExpenseDate;