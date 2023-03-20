import Window from './Window';

function History(){
    return (
        <div className="activity__container">
        </div>  
    )
}

function Activity(props){
    return (
        <Window
            id='activity'
            active={props.active} 
            setActive={props.setActive}
            content={<History/>}
        ></Window>
    )
}

export default Activity;