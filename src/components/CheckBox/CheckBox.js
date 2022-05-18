function CheckBox(props) {
    return (
        <div>
            <input type='checkbox' name="done" value="Is Done?" onClick={() => props.onClickChangeBox(props.id)} defaultChecked={props.isChecked} />
            <label htmlFor="Is done?">Is done?</label>
        </div>
    )
}

export default CheckBox;