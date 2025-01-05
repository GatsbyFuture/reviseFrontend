// import logo from '../../logo.svg';
// import './App.css';
// import Header from "../header/Header";
// import {Button} from "../button/Button";
// import {Field} from "../field/Field";
//
// function App() {
//     return (
//         <div className='App'>
//             <Header/>
//             <Field/>
//             <Button/>
//         </div>
//     );
// }
//
// export default App;
// new experiment

// const User = ({firstname, lastname, link}) => {
//     // console.log(props);
//     return (
//         <div>
//             <h1>Mening ismim - {firstname.name}, sharifim - {lastname()}</h1>
//             <a href={link}>Mening Kanlaim</a>
//         </div>
//     )
// }
import {Component} from "react";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            age: ""
        }
    }

    increment = () => {
        // When we use callback function in setState, we will fix to fall behind than clicked.
        this.setState(prevState => ({
            // Here we only change the counter so text won't be updated.
            counter: prevState.counter + 1,
        }))
    }

    decrement = () => {
        this.setState({
            counter: this.state.counter - 1
        });
    }

    reset = () => {
        this.setState({
            counter: 0
        });
    }

    changeHandler = (e, name) => {
        console.log(e, name);
        this.setState({
            age: e.target.value
        });
    }

    render() {
        const {counter, age} = this.state;
        const {firstname, lastname, link} = this.props;

        return (
            <div className='w-50 mx-auto'>
                <div className='border p-3 mt-5'>
                    <h4>Mening ismim - {firstname.name}, sharifim - {lastname()} mening yoshim - {age}</h4>
                    <a href={link}>Mening Kanlaim</a>
                    <div className='mt-3'>
                        <button
                            className='btn btn-success m-1'
                            onClick={this.increment}>
                            Increase
                        </button>
                        <button
                            className='btn btn-danger m-1'
                            onClick={this.decrement}>
                            Decrease
                        </button>
                        <button
                            className='btn btn-info m-1'
                            onClick={this.reset}>
                            Reset
                        </button>
                        <p>You clicked {counter} times</p>
                    </div>
                    <form>
                        <label>Yoshingiz:</label>
                        <input type='text' className='form-control' onChange={e => this.changeHandler(e, "jack")}/>
                        <button className='btn btn-primary m-1'>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

const App = () => {
    return (
        <div>
            <User firstname={{name: 'ELDORBEK'}} lastname={() => 'RAXMATOV'} link='youtube.com'/>
            <User firstname={{name: 'JACK'}} lastname={() => 'UDAROV'} link='google.com'/>
        </div>
    );
}

export default App;