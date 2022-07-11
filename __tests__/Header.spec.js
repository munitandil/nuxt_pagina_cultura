import Vuex from 'vuex'
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Header from "@/components/Header";

const localVue = createLocalVue()

localVue.use(Vuex)

const factory = () => {
    return shallowMount(Header, {});
};

describe("Header", () => {
    /* test("mounts properly", () => {
         const wrapper = factory();
         expect(wrapper.isVueInstance()).toBeTruthy();
     }); */

    test("renders properly", () => {
        const wrapper = factory();
        expect(wrapper.html()).toMatchSnapshot();
    });
});