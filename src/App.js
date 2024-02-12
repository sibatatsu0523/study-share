import './App.css';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

function App() {
  return (
    <div className="App">
      <>
        <h1>Study Share</h1>
        <div className='search'><Autocomplete
          disablePortal
          id="combo-box-demo"
          options={[  { label: 'The Shawshank Redemption', year: 1994 },
          { label: 'The Godfather', year: 1972 },]}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie"
        />}
    /></div>
      </>
    </div>
  );
}

export default App;
