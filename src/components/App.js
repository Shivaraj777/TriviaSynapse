import { ThemeProvider, createTheme } from '@mui/material';
import { About, Home, ReviewAnswer } from '../pages';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';

// createTheme function to change/override the default theme of components
const theme = createTheme({
  components: {
    MuiTextField: { // component name
      styleOverrides: {
        root: { 
          '& .MuiOutlinedInput-input': {
            color: 'white', // change the input text color
          },
          '& .MuiInputLabel-root': {
            color: 'white', // change the label text color
          },
          '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { 
            border: '2px solid white' // change the Text Field outline color to white
          },
          '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': { 
            border: '2px solid white' // change the Text Field outline color to white on hover
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { 
            borderColor: '#f57c00' // change the Text Field outline color to orange on focus
          },
          '& .MuiSvgIcon-root': {
            color: 'white',
          }
        }
      }
    },

    MuiStack: {
      styleOverrides: {
        root: {
          '& > :not(style)': {
            margin: '10px', // Set your custom margin value here
          },
        }
      },
    },
  }     
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/review-answer' element={<ReviewAnswer />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
