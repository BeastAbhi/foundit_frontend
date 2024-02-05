import { useState } from "react";
import PostContext from "./postContext";

const PostState = (props) =>{
    const s1 ={
        "name": "abhi"
    }
    const [state, setState] = useState(s1)
    return (
        <PostContext.Provider value={{state}}>
            {/* this line is compersory for using context api */}
            {props.children}
        </PostContext.Provider>
    )
}

export default PostState;