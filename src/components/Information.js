import Window from './Window';
import logo from './../logo.svg';

function ReactInformation(props){
    return (
        <div className='information__ver'>
            <img src={logo} className="information__ver__logo" alt="logo" />
            <div className='information__ver__name'>Based on React</div>
            <div className='information__ver__licensed'>By Sungsoo KWON, MIT LICENSED.</div>
        </div>
    )
}

function Information(props){
    return (
        <Window
            id='information'
            active={props.active} 
            setActive={props.setActive}
            content={<ReactInformation/>}
        ></Window>
    )
}

export default Information;