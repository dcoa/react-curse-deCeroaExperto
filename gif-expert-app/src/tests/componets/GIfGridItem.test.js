import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from './../../componets/GifGridItem'

describe('Test Gif grid item component', () => {
    
    const title = 'Hisoka'
    const url = 'https://media2.giphy.com/media/IurNlhZHaj7TG/giphy.gif?cid=0d1d774aq1fu4tgx2iu14xoqgouduy4l29blwubi4j2icdha&rid=giphy.gif&ct=g'
    const wrapper = shallow(<GifGridItem title={title} url={url}/>)

    test('should render correct', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should render title in a <p>', () => {
         const p = wrapper.find('p');
         expect(p.text().trim()).toBe(title);    
    })
    
    test('should render a <img> with src and alt attributes', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('should the container has class card', () => {
        const div = wrapper.find('div');
        expect(div.hasClass('card')).toBe(true);

    })
});
