const Button = () => {
    const user = true;
    const login = 'login';
    return <button>{user ? 'logout' : login}</button>
}

export {Button};