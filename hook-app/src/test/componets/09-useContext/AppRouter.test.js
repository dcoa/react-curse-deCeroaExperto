import { mount } from "enzyme"
import { AppRouter } from "../../../components/09-useContext/AppRouter"
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('Test on App router', () => {

    const wrapper = mount(
        <UserContext.Provider
            value={{
                user: {
                    name: 'Jhon Doe',
                    email: 'example@fff.com'
                }
            }}>
            <AppRouter />
        </UserContext.Provider>
    );

    test('should show correctly', () => {

        expect(wrapper).toMatchSnapshot();

    });

});
