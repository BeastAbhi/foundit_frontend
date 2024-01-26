import react from "react";
import postContext from "./postContext";

const PostState = (props) =>{
    const state ={
        "name": "abhi"
    }
    return (
        <PostState.provider value={state}>
            {/* this line is compersory for using context api */}
            {props.childern}
        </PostState.provider>
    )
}

export default PostState;