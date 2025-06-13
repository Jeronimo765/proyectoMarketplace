import UserCard from './components/UserCard';


const App = () => {
    return(
        <div className="app">
            <UserCard name="Antonio" age={4} />
            <UserCard name="Antoniio 2" age={4} />

        </div>
    );
};

export default App;