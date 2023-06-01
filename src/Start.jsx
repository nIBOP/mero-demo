import './Start.scss'

function Start() {
    return(
        <div className="Start">
            <div className="dialog-1">
                Привет, ты оказался на нашем  сайте для сбора друзей и 
                <br />
                организации хорошего время препровождения.
            </div>
            <div className="dialog-2">
                Давай познакомимся с  базовыми
                <br />
                функциями нашего сайта.
            </div>
            <div className="dialog-3">
                Если ты хочешь сразу приступить к созданию мероприятия, жми сюда.
            </div>
            <div className="dialog-4">
                Если хочешь перейти на страничку мероприятия, жми сюда.
            </div>
            <button className='but-start' >
                НАЧАТЬ
            </button>
        </div>
    );
}

export default Start