import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div>
    <div className="expense_item_date">
      <ExpenseDate date={props.date} />
      <div className="expense_item_description">
        <h3>{props.title}</h3>
        
      <div className="expense_item_price">
        <h3>${props.amount}</h3>
     </div>
      </div>
    </div>
  </div>
  );
}

export default ExpenseItem;
