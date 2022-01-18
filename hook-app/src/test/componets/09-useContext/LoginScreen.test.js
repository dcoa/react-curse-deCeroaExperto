const { mount } = require("enzyme");
const { LoginScreen } = require("../../../components/09-useContext/LoginScreen");
const { UserContext } = require("../../../components/09-useContext/UserContext");

describe('Test on LoginScreen', () => {

    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider
            value={{
                user: {
                    name: 'Jhon Doe',
                    email: 'example@fff.com'
                },
                setUser
            }}>
            <LoginScreen />
        </UserContext.Provider>
    );

    test('should show correctly', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('should call setUser with the arguments', () => {

        wrapper.find('button').simulate('click');
        expect(setUser).toBeCalledWith({
            id: expect.any(Number),
            name: 'Pikachu',
            type: 'Electric'
        });
    });

})
