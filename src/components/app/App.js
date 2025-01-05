import logo from './logo.svg';
import './App.css';

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

const Field = () => {
    const placeholder = 'Typing...';
    const typeInput = 'text';
    return <input type={typeInput} placeholder={placeholder}/>
}

const Button = () => {
    const user = true;
    const login = 'login';
    return <button>{user ? 'logout' : login}</button>
}

function App() {
    return (
        <div className='App'>
            <Header/>
            <Field/>
            <Button/>
        </div>
    );
}

export default App;
