//import Slider from 'react-input-slider';
import PropTypes from 'prop-types';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function MySlider({ speed, setSpeed }) {
    const handleChange = (event, newValue) => {
        setSpeed(newValue);
    };
    return (

        <Box sx={{ width: "100%" }}>
                
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
        </Box>
    )
}

export default MySlider