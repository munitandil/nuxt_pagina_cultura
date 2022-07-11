import { shallowMount } from "@vue/test-utils";
import Footer from "@/components/Footer";


const factory = () => {
    return shallowMount(Footer, {
        stubs: {
            'nuxt-link': true,
            'any-other-child': true
        }
    });
};

describe("Footer", () => {
    /*test("mounts properly", () => {
        const wrapper = factory();
        expect(wrapper.vm).toBeTruthy();
    }); */

    test("renders properly", () => {
        const wrapper = factory();
        expect(wrapper.html()).toMatchSnapshot();
    });
});