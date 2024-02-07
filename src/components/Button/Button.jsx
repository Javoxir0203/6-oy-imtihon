
function Button({
    label,
    type,
    styles,
    handleEvent
}) {
    return (
        <div>
            <button typeof={type} className={styles} onClick={handleEvent}>{label}</button>
        </div>
    )
}


export default Button;