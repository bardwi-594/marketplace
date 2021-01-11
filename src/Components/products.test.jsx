import React from "react";
import Products from "./Products";
import Home from "../Pages/Home";
import { configure, shallow} from 'enzyme';
import { Provider } from "react-redux";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from "./.././store";

Enzyme.configure({ adapter: new Adapter() });
configure({ adapter: new Adapter()});

it('renders without crashing', () => {
    shallow(
        <Provider store={store}>
            <Products/>
        </Provider>
        )
   
});

describe('Products', () =>{
const mockfn = jest.fn();
const props ={
    buyProduct: mockfn
}   

it('should render 1 <Product /> Component', () => {  
    const component = shallow(<Home>
                               <Products {...props}>
                                </Products>
                              </Home>);
    expect(component).toHaveLength(1);
    
});

/*it("Check to run onClick function", () => {
    const buyProduct = jest.fn();
    const button = shallow(<Home>
        <Products onClick={buyProduct}>ok
        </Products>
       </Home>);
    button.find('button.buybtn').simulate('click','junk')
    expect(buyProduct.mock.calls.length).toEqual(1)
    
    
});*/
    
     
});
     
    
