import { useState, useEffect } from "react";
import UserCard from './components/UserCard';

interface User {
    id: number;
    name: string;
    age: number;
}

const App = () => {
    const [users, setUsers] = useState<User[] | null>(null);


    useEffect(() => {
        fetch("/api/users")
            .then((response) => response.json())
            .then(data => setUsers(data))
            .catch((err) => console.error(err));
    }, []);
    if (users === null) {
        return <div>No Hay Usuarios</div>
    }
    return(
        <div className="app">
            {users.map(users =>{
                return <UserCard key={users.id} name={users.name} age={users.age} />
            })}

        </div>
    );
};

export default App;