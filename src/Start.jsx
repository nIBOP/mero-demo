import './Start.scss'
import hat from './res/hat.svg'

function Start() {
    return(
        <div className="Start">
            <div className="dialog">
                <div className="dialog-1">
                    <p>Привет, ты оказался на нашем  сайте для сбора друзей и 
                    <br />
                    организации хорошего время препровождения.</p>
                </div>
                <div className="dialog-2">
                    <p>Давай познакомимся с  базовыми
                    <br />
                    функциями нашего сайта.</p>
                </div>
                <div className="dialog-3">
                    <p>Если ты хочешь сразу приступить к созданию мероприятия, <a href="/events">жми сюда.</a></p> 
                </div>
                <div className="dialog-4">
                    <p>Если хочешь перейти на страничку мероприятия, <a href="/search">жми сюда.</a></p> 
                </div>
            </div>
            <div className="but-container">
                <button className='but-start' >
                    <img id='hat' src={hat} alt="" />
                    НАЧАТЬ
                </button>
            </div>
        </div>
    );
}

export default Start