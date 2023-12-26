import React from 'react';
import classes from './RecipeIteem.module.css'
import MyButton from "../UI/button/MyButton";
import {useSelector} from "react-redux";
import {useAction} from "../hooks/useAction";

const RecipeItem = ({recipe}) => {
    const {favorites} = useSelector(state => state.favorites);
    const {toggleToFavorites} = useAction()
    console.log(favorites)
    const isExist = favorites.some(r => r.id === recipe.id)

    return (
       /* <img src="" alt=""/>*/
        <div className={classes.item}>
            <h2>{recipe.name}</h2>
            <MyButton onClick={() => toggleToFavorites(recipe)} style={{marginTop: '10px'}}>
                {isExist
                    ? 'Remove from favorite'
                    :  'Add to favorite'
                }
            </MyButton>
        </div>
    );
};

export default RecipeItem;
