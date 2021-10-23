import React, { useState } from "react";
import Form from "./Form";
import { bgColor, priorityText } from "../helpers";
import "./Main.css";

const Main = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [formData, setFormData] = useState({
    job: "",
    priority: 3,
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const addElement = (newRecord) => {
    setData(() => [...data, newRecord]);
  };

  const deleteElement = (e, id) => {
    e.preventDefault();
    setData(data.filter((el) => el.id !== id));
  };

  const editElement = (e, id) => {
    e.preventDefault();
    //find index of element
    const element = data.findIndex((el) => el.id === id);
    //copy array into new variable
    const newData = [...data];
    //edit our element
    newData[element] = {
      ...newData[element],
      priority: Number(formData.priority),
    };
    setData(newData);
    setFormData({ ...formData, priority: 3 });
  };

  const displayElements = (data) => {
    let dataNew;
    if (search.length === 0) {
      dataNew = data.sort((a, b) => b.priority - a.priority);
    } else {
      const filtered = data.filter((obj) => {
        return obj.job.toLowerCase().includes(search.toLowerCase());
      });
      dataNew = filtered.sort((a, b) => b.priority - a.priority);
    }

    return (
      <>
        {dataNew.map((el) => (
          <div
            className="customLi"
            style={{ backgroundColor: `${bgColor(el.priority)}` }}
            key={el.id}
          >
            <p className="job"> {el.job}</p>
            <p className="priority">{priorityText(el.priority)}</p>
            <span>
              <button
                type="button"
                className="btn btn-warning"
                data-toggle="modal"
                data-target={`#${el.id}`}
              >
                Edit
              </button>
              {/* modal start*/}
              <div
                className="modal fade"
                id={el.id}
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLongTitle"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLongTitle">
                        {el.job}
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className=" form-group select">
                        <label htmlFor="priority">Priority:</label>
                        <select
                          value={Number(formData.priority)}
                          name="priority"
                          id="priority"
                          onChange={(e) => handleChange(e)}
                          className="form-control"
                          required
                        >
                          <option value={Number(3)}>Urgent</option>
                          <option value={Number(2)}>Regular</option>
                          <option value={Number(1)}>Trivial</option>
                        </select>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        onClick={(e) => editElement(e, el.id)}
                        type="button"
                        className="btn btn-primary"
                        data-dismiss="modal"
                      >
                        Upgrade
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* modal end*/}
              <button
                className="btn btn-danger"
                onClick={(e) => deleteElement(e, el.id)}
              >
                Delete
              </button>
            </span>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="container">
      <Form addElement={addElement} />
      <hr />
      <div class="form-group has-search">
        <span class="fa fa-search form-control-feedback"></span>
        <input
          onChange={(e) => handleChangeSearch(e)}
          type="text"
          class="form-control"
          placeholder="Search"
        />
      </div>
      <hr />
      {displayElements(data)}
    </div>
  );
};

export default Main;
