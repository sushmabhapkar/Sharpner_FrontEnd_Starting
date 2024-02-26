import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div>
    <div className="expense_item_date">
      <ExpenseDate date={props.date} />
      <div className="expense_item_description">
        <h5>{props.title}</h5>
        
      <div className="expense_item_price">
        <h5>${props.amount}</h5>
     </div>
      </div>
    </div>
  </div>
  );
}

export default ExpenseItem;
