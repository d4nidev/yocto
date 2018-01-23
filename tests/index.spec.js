import { y, createElement } from '../'
/** @jsx y */

test('renders a hello world', () => {
    const element = createElement(<div>Hello, world!</div>)
    expect(element).toBeInstanceOf(HTMLDivElement)
    expect(element.innerHTML).toEqual('Hello, world!')
})

test('renders nested elements', () => {
    const Message = <span>Hello, world!</span>
    const element = createElement(<div><Message /></div>)
    expect(element.children[0]).toBeInstanceOf(HTMLSpanElement)
    expect(element.children[0].innerHTML).toEqual('Hello, world!')
})

test('sets props', () => {
    const elementWithProps = createElement(
        <div className='test-className'>
            Element with props
        </div>
    )

    expect(elementWithProps.getAttribute('class')).toEqual('test-className')
})