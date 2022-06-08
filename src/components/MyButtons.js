import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';

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

const ArraySizeButton = ({ arraySize, setMax}) => (
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

export { SortButton, RefreshButton, ArraySizeButton }