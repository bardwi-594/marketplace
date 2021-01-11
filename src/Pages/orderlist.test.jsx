import React from "react";
import Orderlist from "./Orderlist";
import { configure, shallow} from 'enzyme';
import { Provider } from "react-redux";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from "../store";
Enzyme.configure({ adapter: new Adapter() });

configure({ adapter: new Adapter()});

it('renders without crashing', () => {
    shallow(
        <Provider store={store}>
            <Orderlist/>
        </Provider>
    )      
});