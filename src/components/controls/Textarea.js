import React from 'react'
import { TextareaAutosize } from '@material-ui/core';

export default function Textarea(props) {

    const { name, label, value,error=null, onChange, ...other } = props;
    return (
        <TextareaAutosize
            variant="outlined"
            label={label}
            name={name}
            minRows={3}
            cols={45}
            value={value}
            onChange={onChange}
            {...other}
            {...(error && {error:true,helperText:error})}
        />
    )
}
