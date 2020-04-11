export default (expenses) => {
    if(expenses.length === 0) return 0; 

    return expenses
            .map((val) => parseInt(val.amount))
            .reduce((sum,val) => sum + val, 0); 
}