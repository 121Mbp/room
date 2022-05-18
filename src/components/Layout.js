import Icon from './Icon';

const apps = [
    {name: 'projects', icon: process.env.PUBLIC_URL + '/assets/app/folder.png'},
    {name: 'activity', icon: process.env.PUBLIC_URL + '/assets/app/calendar.png'},
    {name: 'about', icon: process.env.PUBLIC_URL + '/assets/app/note.png'},
    /*{name: 'terminal', icon: process.env.PUBLIC_URL + '/assets/app/terminal.png'},*/
    {name: 'email', icon: process.env.PUBLIC_URL + '/assets/app/email.png'},
    /*{name: 'browser', icon: process.env.PUBLIC_URL + '/assets/app/safari.png'},*/
    {name: 'contact', icon: process.env.PUBLIC_URL + '/assets/app/contact.png'},
    {name: 'information', icon: process.env.PUBLIC_URL + '/assets/app/setting.png'},
];

function Layout(props){
    return (
        <div className="layout" >
            <div className="layout__apps">
                {apps.map((item) => <Icon 
                    key={item.name} 
                    name={item.name} 
                    icon={item.icon} 
                    email={props.email}
                    active={props.active} 
                    setActive={props.setActive}
                    root={props.root}
                    setRoot={props.setRoot}
                ></Icon>)}
            </div>
        </div>
    )
}

export default Layout;