import React from "react";
import Home from "./Home";
import { configure, shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Products from "../Components/Products";
import Buy from "../Components/Buy";
Enzyme.configure({ adapter: new Adapter() });


describe("<Home/>", () => {
    it("should 2 Child Component", () => {
        const component = shallow( <Home />);
        expect(component.containsMatchingElement(<Products/>)).toEqual(true);
        expect(component.containsMatchingElement(<Buy/>)).toEqual(true);
    });
});