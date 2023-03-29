import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'


const Add = (props) => {
  var [input, setInput] = useState(props.data)
  console.log("add page props" + props.data)



  const inputHandler = (e) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }
  const readValues = () => {
    console.log(props)
    if (props.method === 'post') {
      axios.post("http://localhost:3005/student", input)
        .then(response => {
          alert("success")
        }
        )
    } else if (props.method === 'put') {
      axios.put("http://localhost:3005/student/" + input.id, input)
        .then(response => {
          alert("success")
        })
    }



  }
  return (
    <div>
      <br />
      <TextField label='Name' name='name' variant='outlined'
        value={input.name} onChange={inputHandler} />
      <br />
      <br />

      <TextField label='Grade' name='grade' variant='outlined'
        value={input.grade} onChange={inputHandler} />
      <br />
      <br />


      <Button variant='contained' onClick={readValues}
        color='success'>Submit</Button>
    </div>
  )
}

export default Add