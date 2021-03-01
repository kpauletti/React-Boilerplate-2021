import React, { useState } from 'react';
import { useProperty } from '../api';

const QueryOnMount = props => {
    const [id, setId] = useState('1');

    const { isLoading, data, refetch } = useProperty(id)


    if (isLoading) {
        return <span>Loading...</span>;
    }


    return (
        <div style={styles.box}>
            <div style={styles.centered}>
                <h6>Triggered on Mount</h6>
            </div>

            <label>Select Property ID</label>
            <div>
                <select value={id} name='property-id' id='property-id' onChange={e => setId(e.target.value)}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>
            </div>

            <pre>{JSON.stringify(data, null, 2)}</pre>

            <button onClick={refetch}>Trigger Refetch</button>
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

export default QueryOnMount;
