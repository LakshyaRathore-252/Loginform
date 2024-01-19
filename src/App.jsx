import React from 'react';
import { Container, Stack, TextField, Button, createTheme, ThemeProvider } from '@mui/material';
import { useFormik } from 'formik';

const theme = createTheme({
  palette: {
    text: {
      secondary: '#fff', // Set your desired placeholder color
    },
  },
});

const App = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values));
    },
  });

  return (
    <Container sx={{ height: '100vh', width: '100vw' }}>
      <Stack justifyContent={'center'} alignItems={'center'} width={'100%'} height={'100vh'} >
        <form style={{ display: 'flex', flexDirection: 'column', gap: '3rem', justifyContent: 'center', alignItems: 'center' }} onSubmit={formik.handleSubmit}>
          <TextField
            id="outlined-basic-email"
            label="Enter Your Mail"
            variant="outlined"
            name="email"
            type="email"
            required
            fullWidth
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <TextField
            id="outlined-basic-password"
            label="Enter Your Password"
            variant="outlined"
            name="password"
            type="password"
            required
            fullWidth
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <Button color="primary" variant="contained" type="submit">
            Login
          </Button>
        </form>
      </Stack>
    </Container>
  );
};

export default App;
