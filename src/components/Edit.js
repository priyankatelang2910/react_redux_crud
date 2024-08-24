
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { updateUser } from '../redux/actions/Actions';

export const Edit = () => { 
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Correctly extract studentsData from Redux state
  const students = useSelector((state) => state.StudentsReducer.studensData);


  const [singleStudent, setSingleStudent] = useState({});

  useEffect(() => {
    // Find the current student by ID
    const currentStudent = students.find(student => student.id === parseInt(id));
    if (currentStudent) {
      setSingleStudent(currentStudent);
    }
  }, [id, students]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!singleStudent.name || !singleStudent.email || !singleStudent.number) {
      return toast.warning("Please fill in all fields");
    }
    
    dispatch(updateUser({ 
      id: singleStudent.id,
      name: singleStudent.name, 
      email: singleStudent.email, 
      number: singleStudent.number 
    }));  
    toast.success("Student successfully updated");
    navigate("/add");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSingleStudent(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <section className='edit-data'>
    <div className='container'>
      <div className='row'>
        <h5 className='display-3 text-center my-5'>Edit Student {id}</h5>
        <div className='col-md-6 shadow students-form mx-auto p-5'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Name'
                value={singleStudent.name || ""}
                name="name"
                onChange={handleChange}
                className='form-control'
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Email'
                value={singleStudent.email || ""}
                name="email"
                onChange={handleChange}
                className='form-control'
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Number'
                value={singleStudent.number || ""}
                name="number"
                onChange={handleChange}
                className='form-control'
              />
            </div>
            <div className='form-group'>
              <input
                type='submit'
                value="Update Student"
                className='btn btn-dark'
              />
              <Link to="/add" className='btn btn-danger ml-3'>Cancel</Link>
              
            </div>
          </form>
        </div>
      </div>
    </div>
    </section>
    
  );
};
