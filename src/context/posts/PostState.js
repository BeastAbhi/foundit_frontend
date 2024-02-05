import PostContext from "./postContext";

const PostState = (props) =>{

    return (
        <PostContext.Provider value={{}}>
            {/* this line is compersory for using context api */}
            {props.children}
        </PostContext.Provider>
    )
}

export default PostState;