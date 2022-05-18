
function Window(props){   
    if(props.id === undefined) return;
    const closeHandler = () => {
        props.setActive(false);
    }
    return (
        <div className={'window window__' + props.id}>
            <div className="window__header">
                <div className="window__actions">
                    <span className="red" onClick={closeHandler}></span>
                    <span className="yellow"></span>
                    <span className="green"></span>
                </div>
            </div>
            <div className="window__content">
                {props.content}
            </div>
        </div>
    )
}

export default Window;