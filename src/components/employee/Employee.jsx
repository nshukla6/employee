import React, {useState} from 'react';
import "./Employee.css";


const employeeVal = {
    name:"",
    type:"",
    date:"",
    background:""
}
const employeeFormError = {

    name:"",
    type:"",
    date:"",
    background:""
}

const Employee = () => {


    const [employee, setEmployee] = useState(employeeVal);
    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState(employeeFormError);


    const formHandler = (e) => {
        const key = e.target.name;
        const value= e.target.value;

        setEmployee({
            ...employee,
            [key]:value
        })
        

    }

    const submitForm = (e) => {
        e.preventDefault();
        if(!errorHandler(employee)){
            setEmployees([...employees,employee]);
        }
    }
    const errorHandler = (employee) => {

        const {name, type, date, background} = employee;
        const error ={};
        let isError = false;

        if(!name){
            error.name= `name can not be blank`;
            isError=true;
        }
        if(!type){
            error.type= `type can not be blank`;
            isError=true;
        }
        if(!date){
            error.date= `date can not be blank`;
            isError=true;
        }
        if(!background){
            error.background= `background can not be blank`;
            isError=true;
        }
        console.log("Error =>",error);
        setError(error);
        return isError;

    }

    return (
        <div className="employee">
            <div className="employee_form">
                <form className="form">
                    <div className="">
                        <div className="form_field">
                            <label htmlFor="name">Name</label>
                            <input name="name" onChange={formHandler} type="text" id="name" value={employee.name}  />
                        </div>
                        <div className="error_message">
                            {error.name && <span>{error.name}</span>}
                        </div>
                    </div>
                    
                    <div>
                        <div className="form_field">
                            <label htmlFor="eType">Employee Type</label>
                            <input name="type" onChange={formHandler} type="text" id="eType" value={employee.type} />
                        </div>
                        <div className="error_message">
                                {error.type && <span>{error.type}</span>}
                        </div>
                    </div>
                    


                    <div>
                        <div className="form_field">
                            <label htmlFor="date">Joining Date</label>
                            <input name="date" onChange={formHandler} type="text" id="date" value={employee.date} />
                        </div>
                        <div className="error_message">
                                    {error.date && <span>{error.date}</span>}
                        </div>
                    </div>
                    

                    <div>
                        <div className="form_field">
                            <label htmlFor="background">Background</label>
                            <input onChange={formHandler} type="radio" value={"Engineering"} name="background"  />Engineering
                            <input onChange={formHandler} type="radio" value={"Non-Engineering"} name="background"  />Non-Engineering
                        </div>
                        <div className="error_message">
                            {error.background && <span>{error.background}</span>}
                        </div>
                    </div>
                    

                    <input onClick={submitForm} type="submit" value="Submit" />
                </form>

            </div>
            <div className="employees_details">
                <table>
                    <thead>
                            <tr className="table_header">
                                <td>Name</td>
                                <td>Employee Type</td>
                                <td>Join Date</td>
                                <td>Background</td>
                            </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(employee => <tr key={employee.name}>
                                <td className="table_data">{employee.name}</td>
                                <td className="table_data">{employee.type}</td>
                                <td className="table_data">{employee.date}</td>
                                <td className="table_data">{employee.background}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Employee
