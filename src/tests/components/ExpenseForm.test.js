import React from 'react'; 
import { shallow } from 'enzyme'; 
import ExpenseForm from '../../components/ExpenseForm'; 
import expenses from '../fixtures/expense'; 
import moment from 'moment';

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm/>); 
    expect(wrapper).toMatchSnapshot(); 
})

test('should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>); 
    expect(wrapper).toMatchSnapshot(); 
})

test('should render error for invalid form', () => {
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    }); 

    expect(wrapper).toMatchSnapshot(); 

})


test('should set description if input change', () => {
    const value = "New Description"; 
    const wrapper = shallow(<ExpenseForm/>); 
    wrapper.find('input').at(0).simulate('change', {
        target: {
            name: 'description', 
            value
        }
    }); 
    expect(wrapper.state().description).toBe(value) 
})


test('should set amount if input change', () => {
    const value = 12; 
    const wrapper = shallow(<ExpenseForm/>); 
    wrapper.find('input').at(0).simulate('change', {
        target: {
            name: 'amount', 
            value
        }
    }); 
    expect(wrapper.state().amount).toBe(value) 
})

test('should set new date on date change', () => {
    const now = moment(); 
    const wrapper = shallow(<ExpenseForm/>); 
    console.log(wrapper); 
})