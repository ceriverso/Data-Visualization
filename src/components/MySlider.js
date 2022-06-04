import Slider from 'react-input-slider';

function MySlider({ speed, setSpeed }) {

    return (

        <Slider
            styles={{
                track: {
                    backgroundColor: '#89DDff'
                },
                active: {
                    backgroundColor: 'white'
                },
                thumb: {
                    width: 20,
                    height: 20
                },
                disabled: {
                    opacity: 0.5
                }
            }}
            axis="x"
            xmax={10000}
            x={speed}
            onChange={({ x }) => setSpeed(speed => ({ ...speed, x }))}
        />

    )
}

export default MySlider