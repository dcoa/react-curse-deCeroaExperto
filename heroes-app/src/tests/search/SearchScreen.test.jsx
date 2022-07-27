import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter, useNavigate } from "react-router-dom";
import { SearchScreen } from "../../componets/search/SearchScreen"

const mockNavigate = jest.fn();
jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

describe('SearchScreen', () => {
    beforeEach(() => jest.clearAllMocks());

    test('should show the default values', () => {
        const { container } = render((<MemoryRouter>
            <SearchScreen />
        </MemoryRouter>));

        expect(container).toMatchSnapshot();
    });

    test('should show Batman and the imput with the same queryString', () => {
        render((<MemoryRouter initialEntries={['/search?q=batman']}>
            <SearchScreen />
        </MemoryRouter>));
        const input = screen.getByRole('textbox');
        const image = screen.getByRole('img');
        expect(input.value).toBe('batman');
        expect(image.src).toContain('dc-batman.jpg');
    });

    test('should show a not found message if not exist the hero', () => {
        render((<MemoryRouter initialEntries={['/search?q=joker']}>
            <SearchScreen />
        </MemoryRouter>));
        const notFound = screen.getAllByText('Not found a hero');
        expect(notFound).toBeTruthy();
    });

    test('should show navigate to the hero page', () => {
        render((<MemoryRouter initialEntries={['/search']}>
            <SearchScreen />
        </MemoryRouter>));
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.change(input, {target: {name: 'heroText', value: 'superman'}});
        fireEvent.submit(form);

        expect(mockNavigate).toHaveBeenCalledWith(`?q=superman`);
    });
})