import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import apiCaller from '../../Utils/apiCaller';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
export default function LoginPage() {

    const [formData, setFormData] = useState({
        userName: '',
        password: ''
    })
    const isToken = useSelector(state => state.isToken)
    const dispatch = useDispatch()
    const history = useHistory()
    const classes = useStyles();
    async function onHandleSubmit(e) {
        e.preventDefault();
        console.log(formData);
        try {
            const res = await apiCaller('Users/authenticate', 'POST', formData);
            console.log(res.data.roles.indexOf('admin'));
            if (res.status === 200 && res.data.roles.indexOf('admin') >= 0) {
                localStorage.setItem('tokenApp', res.data.resultObj)
                dispatch({ type: 'ISTOKEN' })
                alert('Đăng nhập thành công')
                history.push('/');
            }
            else {
                alert('Đăng nhập không thành công')
            }
        }
        catch (err) {
            alert('Đăng nhập không thành công')
        }
    } return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Admin
                </Typography>
                <form className={classes.form} Validate onSubmit={onHandleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Username"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={formData.userName}
                        onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                </form>
            </div>
            <Box mt={8}>
            </Box>
        </Container>
    );

}


