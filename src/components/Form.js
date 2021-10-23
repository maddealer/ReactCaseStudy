import React, { useState } from "react";

function Form({ addElement }) {
  const [notEnglish, setNotEnglish] = useState("");
  const [formData, setFormData] = useState({
    job: "",
    priority: 3,
  });

  const validateJob = (text) => {
    //regex for english letters and spaces only
    let isValid = /^[A-Za-z ]+$/.test(text);

    if (isValid) {
      return true;
    }
    return false;
  };
  const handlechange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateJob(formData.job)) {
      setNotEnglish("");
      const newRecord = {
        id: Date.now(),
        job: formData.job.charAt(0).toUpperCase() + formData.job.slice(1),
        priority: Number(formData.priority),
      };
      addElement(newRecord);
      setFormData({ ...formData, job: "", priority: 3 });
    } else {
      setNotEnglish("Only English Letters and Spaces for Job!!!");
    }
  };

  return (
    <>
      {notEnglish ? (
        <div className="alert alert-danger">{notEnglish}</div>
      ) : (
        <div className="alert alert-light"></div>
      )}
      <form>
        <div className="form-group">
          <label htmlFor="job">Job:</label>
          <input
            onChange={(e) => handlechange(e)}
            type="text"
            name="job"
            value={formData.job}
            className="form-control"
            placeholder="Job"
            maxLength="70"
            required
          />
        </div>

        <div className=" form-group select">
          <label htmlFor="priority">Priority:</label>
          <select
            value={Number(formData.priority)}
            name="priority"
            id="priority"
            onChange={(e) => handlechange(e)}
            className="form-control"
            required
          >
            <option value={Number(3)}>Urgent</option>
            <option value={Number(2)}>Regular</option>
            <option value={Number(1)}>Trivial</option>
          </select>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => handleSubmit(e)}
        >
          Create
        </button>
      </form>
    </>
  );
}

export default Form;
