import React from "react";
import Product from "./Product";
import { configure, shallow, mount } from 'enzyme';
import { Provider } from "react-redux";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from "./.././store";
Enzyme.configure({ adapter: new Adapter() });

configure({ adapter: new Adapter()});

it('renders without crashing', () => {
    shallow(
        <Provider store={store}>
            <Product/>
        </Provider>
        )
   
});