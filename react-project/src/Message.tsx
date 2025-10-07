// use PascalCasing
function Message() {
    // this is JSX: This gets converted to javascript code on compile
    const name = 'Ethan'
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello world</h1>;
}

export default Message;