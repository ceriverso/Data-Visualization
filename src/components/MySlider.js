import Slider, { SliderThumb } from '@mui/material/Slider';
import Grid from '@mui/material/Grid';

function MySlider({ speed, setSpeed }) {
    const handleChange = (event, newValue) => {
        setSpeed(newValue);
    };
    return (
        <Grid container spacing={2} alignItems="center">
            <Grid item>Speed</Grid>
            <Grid item xs={8}>
                <Slider
                    aria-label="Speed"
                    size="large"
                    step={500}
                    marks
                    max={5000}
                    value={speed}
                    valueLabelDisplay="auto"
                    onChange={handleChange}
                />
            </Grid>
        </Grid>

    )
}

export default MySlider