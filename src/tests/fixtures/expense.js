import moment from 'moment'; 
export default [
    {
        id: '1', 
        description:'Rent', 
        note: '',
        amount: 1000, 
        createdAt: 0
    }, {
        id: '2',
        description: 'Test', 
        note: '', 
        amount: 500, 
        createdAt: moment(0).subtract(10,'days').valueOf()
    }, {
        id: '3', 
        description: 'Jest', 
        note: '', 
        amount: 3000,
        createdAt: moment(0).add(10,'days').valueOf()
    }
]
