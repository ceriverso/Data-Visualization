import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import RefreshIcon from '@mui/icons-material/Refresh';
import MySlider from './MySlider';

const SortButton = ({ sortMethod }) => (
  <Button
    onClick={sortMethod}
    variant={"contained"}
    size={"small"}
  >
    Sort
  </Button>
)

function RefreshButton({ refresh, setRefresh }) {
  return (
    <Button
      onClick={() => {
        refresh == "false" ? setRefresh("true") : setRefresh("false");
      }
      }
      variant={"contained"}
      size={"small"}
    >
      <RefreshIcon />
    </Button>
  )
}

const ArraySizeButton = ({ arraySize, setMax }) => (
  <Button
    onClick={() => {
      setMax(arraySize);
    }}
    variant={"contained"}
    size={"small"}
  >
    {arraySize}
  </Button>
)

const ButtonBox = ({ sortMethod, refresh, setRefresh, setMax, speed, setSpeed }) => (
  <Box className="buttonox" >
    <List sx={{margin: 'auto'}}>
      <ListItem >
        <ListItemText primary="Array Size" disableTypography/>
        <ArraySizeButton arraySize={5} setMax={setMax} />
      </ListItem>
      <ListItem >
        <ListItemText primary="Array Size" disableTypography/>
        <ArraySizeButton arraySize={10} setMax={setMax} />
      </ListItem>
      <ListItem >
        <ListItemText primary="Sort" disableTypography/>
        <SortButton sortMethod={sortMethod} />
      </ListItem>
      <ListItem >
      <ListItemText disableTypography/>
        <RefreshButton refresh={refresh} setRefresh={setRefresh} />
      </ListItem>
      <ListItem >
        <MySlider speed={speed} setSpeed={setSpeed} />
      </ListItem>
    </List>
    </Box>

)

export { SortButton, RefreshButton, ArraySizeButton, ButtonBox }