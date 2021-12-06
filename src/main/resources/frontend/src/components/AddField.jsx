
import React, { useState, useCallback } from "react";
import '../styles/EditProfile.css';
import { Button } from "react-bootstrap";
import CheckBox from "./CheckBox";
import MySelect from "./MySelect";

const AddField = () => {


    const [label, setlabel] = useState('');
    const [type, setType] = useState('');
    const [option, setOption] = useState('');
    const [required, setRequired] = useState(false);
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
                    <CheckBox value={'Required'}   onClick={() => requiredHandler} />
                    <CheckBox value={'is Active'}  onClick={() => setActive(!active)}/>
                </div>
                
            </div>
            <Button onClick={addNewField}className="formBtn">Add</Button>
        </form>
    );
};
export default AddField;