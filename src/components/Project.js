import Window from './Window';
import _Project from '../data/project';
import { useState } from 'react';

function History(){
    const [year, setYear] = useState('all');
    //const years = [2023, 2022, 2021, 2020, 2019, 2018, 2017];
    const date = _Project.map((item) => item.date);
    const years = [...new Set(date)];
    
    return (
        <div className={year ? 'project__container project__container__' + year: 'project__container'}>
            <div className='project__container__side'>
                <dl className='project__container__side__group'>
                    <dt>General</dt>
                    <dd data-year='all' onClick={() => {                    
                        setYear('all');
                    }}>All</dd>
                </dl>
                <dl className='project__container__side__group'>
                    <dt>Year</dt>
                    {years.map((item) => 
                        <dd key={item} data-year={item} onClick={(e) => {
                            document.querySelector('.project__container__list').scrollTo(0,0);
                            setYear(item);                        
                        }}>{item}</dd>
                    )}
                </dl>
            </div>
            <div className='project__container__list'>
                {_Project.map((item) => 
                    <div key={item.id} data-year={item.date} className='project__container__list__item' onClick={() => {(item.url !== '') ? window.open(item.url, '_blank') : alert('소스를 제공할 수 없습니다.')}}>
                        <div className='project__container__list__item__thumb' style={{backgroundImage: 'url('+ process.env.PUBLIC_URL + item.image +')'}}>
                            <div className='project__container__list__item__thumb__year'>{item.date}</div>
                            <div className='project__container__list__item__thumb__skill'>{item.tag.map((skill) => <span className={'background-' + skill.toLowerCase()}>{skill}</span>)}</div>
                        </div>
                        <dl className='project__container__list__item__info'>
                            <dt>{item.name}</dt>
                            <dd>{item.description}</dd>
                        </dl>
                    </div>
                )}
            </div>
        </div>
    )
}

function Project(props){
    return (
        <Window
            id='projects'
            active={props.active} 
            setActive={props.setActive}
            content={<History/>}
        ></Window>
    )
}

export default Project;