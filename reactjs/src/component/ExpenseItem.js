import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from './Card';


function ExpenseItem(props) {
  return (
    
    <Card className="expense_item_date">
      <ExpenseDate date={props.date} />
      <div className="expense_item_description">
        <h3>{props.title}</h3>
        
      <div className="expense_item_price">
        <h3>${props.amount}</h3>
     </div>
      </div>
    </Card>
  
  );
}

export default ExpenseItem;
