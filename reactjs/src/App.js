 import ExpenseItem  from "./component/ExpenseItem";
 import Card from "./component/Card";
 
 function App()
{

  const expenses=[

    {
      title:"Car  Insurance",
      amount:4533,
      date:new Date(2021,6,28)
    },
    {
      title:"shopping cloths",
      amount:6663,
      date:new Date(2021,3,5)
    },
    {
      title:"general store material",
      amount:9333,
      date:new Date(2021,6,28)
    }

  ];
  return (
    <Card>
    <h2>....Expense Track Application.... </h2>
    <ExpenseItem 
    title={expenses[0].title}
    amount={expenses[0].amount}
    date={expenses[0].date}
    />
    <ExpenseItem 
    title={expenses[1].title}
    amount={expenses[1].amount}
    date={expenses[1].date}
    />
    <ExpenseItem
    title={expenses[2].title}
    amount={expenses[2].amount}
    date={expenses[2].date}
    />
    
    </Card>
  );
  
}
export default App;
