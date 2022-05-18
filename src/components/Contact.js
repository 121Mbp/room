import Window from './Window';

const icons = [
    /*{name: 'email', uri: 'mailto:nino09@naver.com'},*/
    {name: 'github', uri: 'https://github.com/121Mbp'},
    {name: 'instagram', uri: 'https://www.instagram.com/_kevinworld/'},
    {name: 'facebook', uri: 'https://www.facebook.com/'},
    {name: 'twitter', uri: 'https://www.twitter.com/'},
];

function ContactInformation(props){
    return (
        <div className='contact__us'>
            <div className='contact__us__item'>
                {icons.map((item) => 
                    <div key={item.name} className={'fa-icon ' + item.name} onClick={() => window.open(item.uri, '_blank')}></div>
                )}
            </div>
        </div>
    )
}

function Contact(props){
    return (
        <Window
            id='contact'
            active={props.active} 
            setActive={props.setActive}
            content={<ContactInformation/>}
        ></Window>
    )
}
export default Contact;