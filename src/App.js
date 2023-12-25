import './App.css';
import RecipeItem from "./components/recipe-item/recipe-item";

function App() {
    return (
        <div className="App">
            <RecipeItem recipe={{
                id: 1,
                name: 'Borsch',
            }}/>
            <RecipeItem recipe={{
                id: 2,
                name: 'Pizza',
            }}/>
            <RecipeItem recipe={{
                id: 3,
                name: 'Fish',
            }}/>
        </div>
    );
}

export default App;
