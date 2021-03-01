import React, { useState } from 'react';
import { useCreateProperty } from '../api';

const QueryByButton = props => {

    const [formValues, setFormValues] = useState({});
    const { mutate } = useCreateProperty(formValues)

    const handleChange = field => event => {
        setFormValues({
            ...formValues,
            [field]: event.target.value
        })
    }

    const onSubmit = () => {
        mutate(formValues)
    }


    return (
        <div style={styles.box}>
            <div style={styles.centered}>
                <h6>Mutations</h6>
            </div>

            <div>
                <label htmlFor='property-name'>Name</label>
                <input id='property-name' onChange={handleChange('name')}/>
                <button onClick={onSubmit}>Submit</button>
            </div>

        </div>
    );
};

const styles = {
    centered: {
        textAlign: 'center'
    },
    box: {
        border: '1px solid black',
        minWidth: '30vw'
    }
};

export default QueryByButton;
