import { Table, TableCell, TableHead, TableRow, TableContainer, Button, TableBody } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Add from './Add'
const View = () => {
    var [update, setUpdate] = useState(false)
    var [selected, setSelected] = useState([])
    var [students, setStudents] = useState([])
    useEffect(() => {
        axios.get(" http://localhost:3005/student",input)
            .then((data) => {
                setStudents(data.data)
            }).catch((err) => {
                console.log('post data')
            })

    }, [])
    const updatevalues = (values) => {
        setSelected(values);
        setUpdate(true); 
    }
    const deleteValues = (id) => {
        console.log("delete clicked   " + id)
        axios.put("http://localhost:3005/student/"+input.id)
            .then((response) => {
                console.log(response.idvalue);
                alert("successfully deleted");
                // window.location.reload (false);
            })
    }

    var finaljsx = <TableContainer>
        <br /><br />
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>gener</TableCell>
                    <TableCell>Book</TableCell>
                    <TableCell>Author</TableCell>
                    <TableCell>Publishedby</TableCell>
                    <TableCell>publishedmonth</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    students.map((value, index) => {
                        return <TableRow key={index}>
                            <TableCell>{value.gener}</TableCell>
                            <TableCell>{value.Book}</TableCell>
                            <TableCell>{value.Author}</TableCell>
                            <TableCell>{value.Published}</TableCell>
                            <TableCell>{value.Delete}</TableCell>

                            <TableCell>
                                <Button onClick={() => { updatevalues(value) }}>
                                    Update</Button>
                                <Button onClick={() => deleteValues(value.id)} color='error'>
                                    delete</Button>
                            </TableCell>
                        </TableRow>

                    })
                }
            </TableBody>
        </Table>
    </TableContainer >

    if (update)
        finaljsx = <Add data={selected} method="put" />
    return (

        <div>
            {finaljsx}
        </div>
    )

}
export default View