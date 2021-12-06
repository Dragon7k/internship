
import React, { useState, useCallback } from "react";
import '../styles/EditProfile.css';
import { Button } from "react-bootstrap";
import CheckBox from "./CheckBox";
import MySelect from "./MySelect";

const AddField = () => {


    const [label, setlabel] = useState('');
    const [type, setType] = useState('');
    const [option, setOption] = useState('');
    var [required, setRequired] = useState(false);
    const [active, setActive] = useState(false);

    const addNewField = (e) => {          
        const newField = {
            label,
            type,
            option,
            required,
            active
        }
        console.log(newField);
        //addUserInDataBase(newUser);

    }

    const requiredHandler = () => {
        setRequired(!required);
      };

    return (
        <form className="formSignUp">
            <label>Add field</label>
            <div class="formInner">
                <div className="addField">
                <a classname="">Label</a>
                <input class="text input--active" id="label" 
                 value={label}
                 onChange={e => setlabel(e.target.value)}/>
                </div>
                
                <div className="addField">
                <a classname="">Type</a>
                    <MySelect
                    value ={type}
                    onChange ={type => setType(type)}
                    defaultValue=""
                    options={[
                        {value:'COMBOBOX', name:'Combobox'},
                        {value:'SINGLE_LINE_TEXT', name:'Single line text'},
                        {value:'RADIO_BUTTON', name:'Radio button'},
                        {value:'CHECKBOX', name:'Checkbox'},
                        {value:'DATE', name:'Date'},
                    ]}
                    >
                    </MySelect>
                </div>

                <div className="addField">
                <a classname="">Option</a>
                <textarea class="text input--active"
                value={option}
                onChange={e => setOption(e.target.value)}/>
                </div>
                <div className="addField">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" onChange={()=>setRequired(!required)} />
                    <label class="form-check-label" for="flexCheckChecked">
                    Required
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" onChange={()=>setActive(!active)} />
                    <label class="form-check-label" for="flexCheckChecked">
                    is Active
                    </label>
                </div>
                
                </div>
                
            </div>
            <Button onClick={addNewField}className="formBtn">Add</Button>
        </form>
    );
};
export default AddField;