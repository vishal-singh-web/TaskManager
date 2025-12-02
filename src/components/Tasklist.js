import React, { useContext, useEffect, useState } from 'react'
import { TaskContext } from '../Context/Taskstate.js';
import Taskitem from './Taskitem';

function Tasklist(props) {
    const taskContext = useContext(TaskContext);
    const { tasks, searchTerm,getData } = taskContext;
    const [currtask, setcurr] = useState([...tasks]);
    const [priority, setpriority] = useState("Any");
    const [status, setstatus] = useState("Any");
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5;
    useEffect(() => {
        let filtered = tasks;
        if (priority !== "Any") {
            filtered = filtered.filter(t => t.priority === priority);
        }

        if (status !== "Any") {
            filtered = filtered.filter(t => t.status === status);
        }

        if (searchTerm.trim() !== "") {
            const q = searchTerm.toLowerCase();
            filtered = filtered.filter(t =>
                t.title.toLowerCase().includes(q)
            );
        }

        setcurr(filtered);
        
        getData();
    }, [tasks, priority, status, searchTerm]);
    const totalPages = Math.ceil(currtask.length / pageSize);

    const indexOfLast = currentPage * pageSize;
    const indexOfFirst = indexOfLast - pageSize;
    const currentTasks = currtask.slice(indexOfFirst, indexOfLast);

    const goNext = () => {
        setCurrentPage(p => Math.min(p + 1, totalPages));
    };

    const goPrev = () => {
        setCurrentPage(p => Math.max(p - 1, 1));
    };
    const handlePriority = (e) => {
        setpriority(e.target.value);
    };

    const handleStatus = (e) => {
        setstatus(e.target.value);
    };
    return (
        <>
            <div className='mx-3'>
                <div className="my-3">
                    <h1>Your Tasks:</h1>
                </div>
                <div className="row g-2 align-items-center mx-3">
                    <i className="fa-solid fa-filter"></i>
                    <div className="col-md-2 d-flex align-items-center mx-2">
                        <span className="me-2 fw-semibold">Priority:</span>
                        <select
                            className="form-select"
                            name="priority"
                            value={priority}
                            onChange={handlePriority}
                        >
                            <option>Any</option>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>
                    <div className="col-md-2 d-flex align-items-center">
                        <span className="me-2 fw-semibold">Status:</span>
                        <select
                            className="form-select"
                            name="status"
                            value={status}
                            onChange={handleStatus}
                        >
                            <option>Any</option>
                            <option>Pending</option>
                            <option>In-Progress</option>
                            <option>Completed</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    {currentTasks.length === 0 && (
                        <div style={{ color: "red" }} className="d-flex justify-content-center align-items-center">
                            <b>NO TASKS FOUND</b>
                        </div>
                    )}

                    {currentTasks.map((a) => (
                        <div className="col-md-12" key={a._id} >
                            <Taskitem task={a} setMsg={props.setMsg} setShowAlert={props.setShowAlert} setType={props.setType}/>
                        </div>
                    ))}
                </div>
                {currtask.length > 0 && (
                    <div className="d-flex justify-content-center align-items-center my-3 gap-3">
                        <button
                            className="btn btn-outline-success"
                            onClick={goPrev}
                            disabled={currentPage === 1}
                        >
                            Prev
                        </button>
                        <span>
                            Page {currentPage} of {totalPages || 1}
                        </span>
                        <button
                            className="btn btn-outline-success"
                            onClick={goNext}
                            disabled={currentPage === totalPages || totalPages === 0}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default Tasklist