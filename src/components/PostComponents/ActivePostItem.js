import React, { useContext } from "react";
import postContext from "../../context/posts/postContext";
import alertContext from "../../context/alerts/alertContext";

function ActivePostItem(props) {
  const alertcon = useContext(alertContext);
  const {showAlert} = alertcon;
  const context = useContext(postContext);
  const { deletePost } = context;
  const { Visibality, updatePost, ActualPost, changeVisibality, givePower } = props;
  return (
    <div
      className="justify-content-center align-items-center position-absolute"
      style={{
        height: "100%",
        width: "100%",
        backdropFilter: "blur(2px)",
        zIndex: "2",
        display: `${Visibality ? "flex" : "none"}`,
      }}
      onClick={() => changeVisibality(ActualPost)}
    >
      <div className="col-md-3">
        <div className="card  my-3">
          <img src={ActualPost.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{ActualPost.itemName}</h5>
            <p className="card-text">Collect from: {ActualPost.collectFrom}</p>
            <p className="card-text">Contact: {ActualPost.contact}</p>
            <p className="card-text">Description: {ActualPost.description}</p>
            <div className={`d-${givePower ? "flex" : "none" } flex-row-reverse`}>
              <i
                className="bi bi-recycle mx-2"
                onClick={() => {
                  deletePost(ActualPost._id);
                  showAlert('Deleted successfully','success')
                }}
              >
                🗑️
              </i>
              <i
                className="bi bi-recycle mx-2"
                onClick={() => {
                  updatePost(ActualPost);
                }}
              >
                ✏️
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivePostItem;
