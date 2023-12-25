import React from 'react';
import classes from './RecipeIteem.module.css'
import MyButton from "../UI/button/MyButton";
import {useSelector} from "react-redux";

const RecipeItem = ({recipe}) => {
    const {favorites} = useSelector(state => state);

    console.log(favorites);
    return (
       /* <img src="" alt=""/>*/
        <div className={classes.item}>
            <h2>{recipe.name}</h2>
            <MyButton style={{marginTop: '10px'}}>Add to favorites</MyButton>
        </div>
    );
};

export default RecipeItem;
