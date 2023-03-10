import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import TableHeader from './tableComponents/TableHeader';
import CurrentWeeks from './tableComponents/CurrentWeeks';
// import NewTask from './tableComponents/NewTask';
// import EditTask from './tableComponents/EditTask';


// import DateNavBtn from './tableComponents/tableButtons/DateNavBtn'
// import TaskEditBtn from './tableComponents/tableButtons/TaskEditBtn'

// const NUM_MONTHS_IN_QUARTER = 3;

function Tablepage() {



    return (
        <Container maxWidth="sm" overflow="scroll" m="auto">
            <Box textAlign="center" p={8} fontSize="4xl" fontWeight="bolder">QUARTERLY TASKS</Box>
            <TableHeader />

            <CurrentWeeks />









        </Container>
    )
}

export default Tablepage