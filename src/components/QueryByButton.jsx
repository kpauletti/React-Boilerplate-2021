import React from 'react';
import { useProperties } from '../api';

const QueryByButton = props => {

    const { isLoading,  data,  refetch } = useProperties()


    if (isLoading) {
        return <span>Loading...</span>;
    }

    return (
        <div style={styles.box}>
            <div style={styles.centered}>
                <h6>Triggered By Button</h6>
            </div>
            <ul>
                {data?.map(property => (
                    <li key={property.name}>{property.name}</li>
                ))}
            </ul>

            <button onClick={refetch}>Fetch Properties</button>
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
