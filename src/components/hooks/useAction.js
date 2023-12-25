import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "@reduxjs/toolkit";
import {actions} from "../../store/favorites/favorites.slice";

const rootAction = {
    ...actions
}

export const useAction = () => {
    const dispatch = useDispatch()

    return useMemo(()=>{
        bindActionCreators(rootAction, dispatch)
    },[dispatch])
}
