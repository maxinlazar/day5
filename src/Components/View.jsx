import { Table, TableCell, TableHead, TableRow, TableContainer, Button, TableBody } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const View = () => {
    var [students, setStudents] = useState([])
    useEffect(() => {
        axios.get(' http://localhost:3005/student'
        ).then((data) => {
            setStudents(data.data)
        }).catch((err) => {
            console.log('error', 
        })

    }, [])
    const deletevalues =(id)=>
    console.log("delete clicked"+id)
    
    return (
        <TableContainer>
            <br /><br />
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>name</TableCell>
                        <TableCell>grade</TableCell>
                        <TableCell>Update</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        students.map((value, index) => {
                            return <TableRow key={index}>
                                <TableCell>{value.id}</TableCell>
                                <TableCell>{value.name}</TableCell>
                                <TableCell>{value.grade}</TableCell>
                                <TableCell>{value.Update}</TableCell>
                                <TableCell>{value.Delete}</TableCell>

                                <TableCell>
                                    <Button>
                                        color='error'</Button>
                                </TableCell>
                            </TableRow>

                        })
                    }
                </TableBody>
            </Table>
        </TableContainer >

    )
}
export default View