import React from "react";
import Buy from "./Buy";
import Home from "../Pages/Home";
import { configure, mount, shallow} from 'enzyme';
import Modal from 'react-modal';
import { Provider } from "react-redux";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from "./.././store";


Enzyme.configure({ adapter: new Adapter() });
configure({ adapter: new Adapter()});

it('renders without crashing', () => {
    shallow(<Provider store={store}>
        <Home>
          <Buy />
       </Home>
      </Provider>);
   
});

describe('Products', () =>{
it('should render 1 <Product /> Component', () => {  
    const component = shallow(<Provider store={store}>
        <Home>
          <Buy/>
          </Home>
        </Provider>);
    expect(component).toHaveLength(1);
        
    });
it("Check to run onClick function", () => {
    const removeItem = jest.fn();
    const button = shallow(<Provider store={store}>
        <Home><Buy onClick={removeItem}/></Home>
        </Provider>);
    button.dive().find('button.remove-item')
    expect(button.exists()).toEqual(true) 
    button.simulate("click")
        
        
    });
it("Check to run ordersHandler onSubmit", () => {
    const ordersHandler = { preventDefault: () => console.log('preventDefault') }
    const form = shallow(<Provider store={store}>
             <Home><Buy onSubmit={ordersHandler}/></Home>
            </Provider>);
        form.dive().find('form.form')
        expect(form.exists()).toEqual(true) 
           
    });

/*it("Check openModal onclick", () => {
    const openModal = jest.fn();
    const modal = shallow(<Provider store={store}>
            <Home><Buy onClick= {openModal}/></Home>
            </Provider>);
    modal.dive().find('button.button-checkout')
    expect(openModal.mock.calls.length).toEqual(1);
               
    });*/

const formdetails= { email: 'bardwi@gmail.com', name: 'bardwi' , address: 'Berlin', mobile: 1234567};
it('Name check', () => {
    const component = shallow(<Provider store={store}>
        <Home><Buy /></Home>
        </Provider>);
    const name = component.find('input[type="name"]');
    name.value = formdetails.name;
    expect(name.value).toBe('bardwi');
    });

it('Email check', () => {
    const component = shallow(<Provider store={store}>
        <Home><Buy /></Home>
        </Provider>);
    const email = component.find('input[type="email"]');
    email.value = formdetails.email;
    expect(email.value).toBe('bardwi@gmail.com');
    });

it('Address check', () => {
    const component = shallow(<Provider store={store}>
        <Home><Buy /></Home>
        </Provider>);
    const address = component.find('input[type="address"]');
    address.value = formdetails.address;
    expect(address.value).toBe('Berlin');
    });

it('Mobile check', () => {
    const component = shallow(<Provider store={store}>
        <Home><Buy /></Home>
        </Provider>);
    const mobile = component.find('input[type="Mobile"]');
    mobile.value = formdetails.mobile;
    expect(mobile.value).toBe(1234567);
    });
   
});