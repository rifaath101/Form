import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import FormControl from '@mui/material/FormControl'
import { InputLabel } from '@mui/material'
import Countries from './Countries'
import { Copyright } from './Copyright'
import { Form } from './FormFunctions'
import validateInfo from './ValidateInfo'

const theme = createTheme()

export default function Register({ submitForm }) {
  const { handleChange, handleSubmit, formData, errors } = Form(
    submitForm,
    validateInfo
  )

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#21ff5c' }}></Avatar>
          <Typography component='h1' variant='h5'>
            Sign up to be Rifaath's friend
          </Typography>
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='given-name'
                  name='firstName'
                  required
                  fullWidth
                  id='firstName'
                  label='First Name'
                  autoFocus
                  onChange={handleChange}
                  value={formData.firstName || ''}
                />
                {errors.firstName && (
                  <p style={{ color: 'red' }}>{errors.firstName}</p>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id='lastName'
                  label='Last Name'
                  name='lastName'
                  autoComplete='family-name'
                  onChange={handleChange}
                  value={formData.lastName || ''}
                />
                {errors.lastName && (
                  <p style={{ color: 'red' }}>{errors.lastName}</p>
                )}
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-label'>Country</InputLabel>
                  <Countries
                    onChange={handleChange}
                    value={formData.country || ''}
                  />
                </FormControl>
                {errors.country && (
                  <p style={{ color: 'red' }}>{errors.country}</p>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  onChange={handleChange}
                  value={formData.email || ''}
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='new-password'
                  onChange={handleChange}
                  value={formData.password || ''}
                />
                {errors.password && (
                  <p style={{ color: 'red' }}>{errors.password}</p>
                )}
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  )
}
