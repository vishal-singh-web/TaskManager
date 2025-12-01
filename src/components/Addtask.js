import React, { useContext, useState } from "react";
import { TaskContext } from "../Context/Taskstate";

const Addtask = (props) => {
  const host = "http://localhost:4000/api/tasks"
  const [details, setdetails] = useState({ title: '', description: '', priority: 'Medium', status: 'In-Progress' });
  const taskContext = useContext(TaskContext);
  const { tasks, setTasks,getData } = taskContext;
  

  const alert = (message, condition) => {
    props.setMsg(message);
    props.setType(condition); 
    props.setShowAlert(true); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${host}/addtask`
    try {
      const res = fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          "authtoken": localStorage.getItem('token')
        },
        body: JSON.stringify({ title: details.title, description: details.description, priority: details.priority, status: details.status })
      })
      setTasks([...tasks, details]);
      setdetails({ title: '', description: '', priority: 'Medium', status: 'In-Progress' });
      alert('Task added Sucessfully.',"success");
      getData();
    }
    catch (err) {
      console.log(err.message)
      alert('Task action failed, Please try again.',"danger");
    }
  };

  const onchange = (e) => {
    setdetails({ ...details, [e.target.name]: e.target.value });
  };

  const percent = () => {
    const arr = tasks.filter((e) => e.status === 'Completed');
    return (arr.length / tasks.length) * 100;
  };

  return (
    <>
      <div style={{ overflow: "hidden" }} className="mt-5">
        <div className="row align-items-stretch">
          <div className="col-lg-8 mb-3">
            <div className="card custom-card mx-3 mt-3 h-100" style={{ maxWidth: "60rem" }}>
              <div className="card-header">
                Add New Task
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row g-2 align-items-stretch">
                    <div className="col-md-9 d-flex flex-column gap-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        name="title"
                        value={details.title}
                        onChange={onchange}
                        required
                        minLength={3}
                      />
                      <textarea
                        className="form-control"
                        placeholder="Description"
                        name="description"
                        value={details.description}
                        onChange={onchange}
                        minLength={5}
                        rows={3}
                      />
                      <div className="row g-2 align-items-center">

                        <div className="col-md-6 d-flex align-items-center">
                          <span className="me-2 fw-semibold">Priority:</span>
                          <select
                            className="form-select"
                            name="priority"
                            value={details.priority}
                            onChange={onchange}
                          >
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                          </select>
                        </div>

                        <div className="col-md-6 d-flex align-items-center">
                          <span className="me-2 fw-semibold">Status:</span>
                          <select
                            className="form-select"
                            name="status"
                            value={details.status}
                            onChange={onchange}
                          >
                            <option>Pending</option>
                            <option>In-Progress</option>
                            <option>Completed</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 d-flex flex-column gap-2">
                      <button
                        type="submit"
                        className="btn btn-success w-100"
                        style={{ minHeight: "11rem" }} // extended height
                      >
                        Add Task
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mt-3 mr-3">
            <div className="card h-100" style={{ width: "25rem" }}>
              <div className="card-body d-flex flex-column justify-content-center align-items-center h-100">
                <h5 className="card-title">Progress Summary:</h5>
                <p className="card-text">
                  Total Tasks: <b>{tasks.length}</b>
                </p>
                <p className="card-text">
                  Percentage of Task Completed: <b>{tasks.length === 0 ? 0 : percent().toFixed(1)}%</b>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Addtask;
