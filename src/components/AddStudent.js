import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


// properties addCoure is required, function called when Add clicked.
class AddStudent extends Component {
      constructor(props) {
      super(props);
      this.state = {addStudent: false, student: { } };
    };

    handleAddStudentOpen = () => {
      this.setState( {addStudent: true, student: { }} );
    };

    handleAddStudentClose = () => {
      this.setState( {addStudent: false, student: { }} );
    };

    handleStudentNameChange = (event) => {
      var student = this.state.student;
      student.name = event.target.value;

      this.setState({student: student});
    }

    handleStudentEmailChange = (event) => {
      var student = this.state.student;
      student.email = event.target.value;

      this.setState({student: student});
    }

    handleStudentAdd = () => {
       this.props.addStudent(this.state.student);
       this.handleAddStudentClose();
    }

    render()  {
      return (
          <div>
            <Button variant="outlined" color="primary" style={{margin: 10}} onClick={this.handleAddStudentOpen}>
              Add Student
            </Button>
            <Dialog open={this.state.addStudent} onClose={this.handleAddStudentClose}>
              <DialogTitle>Add Student</DialogTitle>
              <DialogContent  style={{paddingTop: 20}} >
                <TextField autoFocus fullWidth label="Student Name" name="name" onChange={this.handleStudentNameChange}  />
                <TextField style={{marginTop: 20}} autoFocus fullWidth label="Student Email" name="email" onChange={this.handleStudentEmailChange}  />
              </DialogContent>
              <DialogActions>
                <Button color="secondary" onClick={this.handleAddStudentClose}>Cancel</Button>
                <Button id="Add" color="primary" onClick={this.handleStudentAdd}>Add</Button>
              </DialogActions>
            </Dialog>
          </div>
      );
    }
}

// required property:  addStudent is a function to call to perform the Add action
AddStudent.propTypes = {
  addStudent : PropTypes.func.isRequired
}

export default AddStudent;
