import Button from '@mui/material/Button';
import style from "../css/button.module.css";

const SortButton = ({ sortMethod }) => (
    <Button
      onClick={sortMethod}
      variant={"contained"}
      className={style.theButton}
      size={"medium"}
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
      className={style.theButton}
      size={"medium"}
    >
      Refresh
    </Button>
  )
}



export { SortButton, RefreshButton }