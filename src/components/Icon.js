function Icon(props){
    const showHandler = () => {
        props.setRoot(props.name);
        if(props.name === 'email'){
            window.open(`mailto:${props.email}`);
            return;
        }else if(props.name === 'activity'){
            alert('준비중 입니다.');
        }else{
            props.setActive(true);
        }
    }
    
    return (
        <div className="icon" onClick={showHandler}>
            <img src={props.icon} alt={props.name} />
            <p>{props.name}</p>
        </div>
    )
}

export default Icon;