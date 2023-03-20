import Window from './Window';

const skill = [
    {type: 'Html', color: 'html'},
    {type: 'Css', color: 'css'},
    {type: 'Javascript', color: 'js'},
    {type: 'Jquery', color: 'python'},
    {type: 'Git', color: 'git'},
    /*{type: 'React', color: 'react'},*/
    {type: 'Scss', color: 'scss'},
    {type: 'Angular', color: 'angular'}
]

function AboutInfomation(props){
    return (
        <div className='about__profile'>
            <div className='about__profile__photo'>
                <img src={process.env.PUBLIC_URL + props.photo} alt={props.name} />
                <div className='about__profile__name'>
                    <p className=''>{props.name}</p>
                </div>
            </div>
            <div className='about__profile__skill'>
                {skill.map((item) => 
                    <div key={item.type} className="about__profile__skill__tag"><span className={'background-' + item.color}></span>{item.type}</div>
                )}
            </div>
        </div>
    )
}

function About(props){
    return (
        <Window 
            id='about'
            active={props.active} 
            setActive={props.setActive}
            content={<AboutInfomation
                name={props.name}
                photo={props.photo}
            ></AboutInfomation>}
        ></Window>
    )
}

export default About;