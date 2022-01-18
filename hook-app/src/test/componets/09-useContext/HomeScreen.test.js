const { mount } = require("enzyme")
const { HomeScreen } = require("../../../components/09-useContext/HomeScreen");
const { UserContext } = require("../../../components/09-useContext/UserContext");

describe('Test on HomeScreen componet', () => {
    // Para ver homescreen
    const wrapper = mount(
        <UserContext.Provider
            value={{
                user: {
                    name: 'Jhon Doe',
                    email: 'example@fff.com'
                }
            }}>
            <HomeScreen />
        </UserContext.Provider>
    );

    test('should show correctry', () => {
        expect(wrapper).toMatchSnapshot();
    });

})
