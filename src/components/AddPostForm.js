import React from "react";

function AddPostForm(props) {
    const {changeFormVisibality, formVisibality} = props;
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          backgroundColor: "red",
        }}
      >
        <form
          style={{
            display: `${formVisibality ? "block" : "none"}`,
            position: "absolute",
            top: "50%",
            right: "50%%",
            backgroundColor: "red",
          }}
        >
          <fieldset>
            <legend>Disabled fieldset example</legend>
            <div className="mb-3">
              <label htmlFor="disabledTextInput" className="form-label">
                Disabled input
              </label>
              <input
                type="text"
                id="disabledTextInput"
                className="form-control"
                placeholder="Disabled input"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="disabledSelect" className="form-label">
                Disabled select menu
              </label>
              <select id="disabledSelect" className="form-select">
                <option>Disabled select</option>
              </select>
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="disabledFieldsetCheck"
                />
                <label
                  className="form-check-label"
                  htmlFor="disabledFieldsetCheck"
                >
                  Can't check this
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={changeFormVisibality}
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default AddPostForm;
