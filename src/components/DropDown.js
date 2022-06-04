
function DropDown({ max, setMax }) {
    return (
        <>
            <strong>Size</strong>
            <label className="dropdown">
                <select className="form-control theme"
                    value={max}
                    onChange={(event) => {
                        setMax(parseInt(event.target.value))
                    }}
                >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="75">75</option>
                    <option value="100">100</option>
                </select>
            </label>
        </>
    )
}

export default DropDown