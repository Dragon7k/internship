import React from 'react';
const CheckBox = (props) => {

    return (
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
            <label class ="form-check-label" for="flexCheckChecked">
            {props.value}
            </label>
        </div>
    );
};

export default CheckBox;