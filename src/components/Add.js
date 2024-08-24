import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addUser, deleteUsers } from '../redux/actions/Actions';

export const Add = () => {
  const dispatch = useDispatch();

  // Corrected state selector
  const students = useSelector((state) => state.StudentsReducer.studensData);
  console.log("students",students);
  

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [data111, setData] = useState([]);

  useEffect(() => {
    setData(students);
  }, [students]);

  const deleteStudent = (id) => {
    dispatch(deleteUsers(id));
    toast.success("Student deleted");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !number) {
      return toast.warning("Please fill in all fields");
    }

    const newStudent = {
      id: Date.now(),
      name,
      email,
      number,
    };

    // Corrected dispatch call
    dispatch(addUser(newStudent));
    toast.success("Student added successfully");

    // Clear form fields
    setName("");
    setEmail("");
    setNumber("");
  };

  return (
    <>
    <section className='section add-usersdata'>
    <div className='container'>
    <div className='row'>
    <div className='col-md-12  mx-auto text-center'>
        <h5 className='display-3 text-center mt-5 '>Add Student</h5>
        <div className='col-md-6 shadow students-form mx-auto p-5'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <input
                type='text'
                name='name'
                placeholder='Name'
                className='form-control'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <input
                type='email'
                placeholder='Email'
                className='form-control'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <input
                type='number'
                placeholder='Number'
                className='form-control'
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className='form-group mx-auto mt-2'>
              <input
                type='submit'
                value='Add Student'
                className='form-control btn btn-dark'
              />
            </div>
          </form>
        </div>
      </div>
      <div className='mt-5'>
        <table className='table'>
          <thead className='table-dark'>
            <tr>
              <th scope='col'>Id</th>
              <th scope='col'>Name</th>
              <th scope='col'>Email</th>
              <th scope='col'>Number</th>
              <th scope='col' className='text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {data111.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.number}</td>
                <td className='text-center'>
                  <Link to={`/edit/${student.id}`} className='btn btn-primary  mr-3'>
                    Edit
                  </Link>
                  <button
                    type='button'
                    onClick={() => deleteStudent(student.id)}
                    className='btn btn-danger  ml-3'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
    </div>
    </section>
   </>
  );
};
