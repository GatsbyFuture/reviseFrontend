const Header = () => {
    const text = 'Hello Jack';
    const getText = (text) => {
        return (
            <div>
                <h1>Hello {text} </h1>
                <p>There aren't lorem method for fill this tag!</p>
            </div>
        );
    }

    return <div>{getText(text)}</div>;
}

export default Header;