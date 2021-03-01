import React from 'react';
import QueryByButton from './QueryByButton';
import QueryOnMount from './QueryOnMount';
import MutateQuery from './MutateQuery';

const Queries = props => {
    return (
        <div>
            <div style={styles.container}>
                <QueryByButton />
                <QueryOnMount />
                <MutateQuery />
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '10px',
        minHeight: '40vh',
        display: 'flex',
        justifyContent: 'space-between'
    }
};

export default Queries;
