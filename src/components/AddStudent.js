import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


/* Modified from AddCourse */
class AddStudent extends Component {
      constructor(props) {
      super(props);
      this.state = {open: false, name: '', email: '', status: '', status_code: 0 };
    };
    
    handleClickOpen = () => {
      this.setState( {open:true} );
    };

    handleClose = () => {
      this.setState( {open:false} );
    };

    handleNameChange = (event) => {
      this.setState({name: event.target.value});
    }
    handleEmailChange = (event) => {
      this.setState({email: event.target.value});
    }

    /* Save the student and close modal */
    handleAdd = () => {
       this.props.addStudent({
	       	name: this.state.name, 
	       	email: this.state.email, 
	       	status: this.state.status, 
	       	status_code: this.state.status_code});
       this.handleClose();
    }

    render()  { 
      return (
          <div>
            <Button id="addstud" variant="outline" color="primary" style={{margin: 10}} onClick={this.handleClickOpen}>
              Add Student
            </Button>
            <Dialog open={this.state.open} onClose={this.handleClose}>
                <DialogTitle>Add Student</DialogTitle>
                <DialogContent  style={{paddingTop: 20}} >
                  <TextField autoFocus fullWidth label="Student Name" name="name" onChange={this.handleNameChange}  />
                  <TextField autoFocus fullWidth label="Student Email" name="email" onChange={this.handleEmailChange}  />  
                </DialogContent>
                <DialogActions>
                  <Button color="secondary" onClick={this.handleClose}>Cancel</Button>
                  <Button id="Add" color="primary" onClick={this.handleAdd}>Add</Button>
                </DialogActions>
              </Dialog>      
          </div>
      ); 
    }
}

/* required property:  addStudent is a function to call to perform the Add action */
AddStudent.propTypes = {
  addStudent : PropTypes.func.isRequired
}

export default AddStudent;
