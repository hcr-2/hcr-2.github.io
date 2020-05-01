
const EventName = 'Canyonball';
const EventMaxResults = [
    ['t', '17s', [], ],
    ['j', '230m', [], ],
    ['t', '13.5s', [], 'Столичный кубок - Зона Опасности'],
    ['d', '1300m', [], ],
];

// END INPUT CONST

const EventTypeMap = {
    't': 'Time Attack',
    'f': 'Football',
    'j': 'Long Jump',
    'w': 'Wheelie',
    'd': 'Distance',
    'ta': 'Target',
    'c': 'Stunt Coins'
};

const ResultLi = ({ item }) => (
    <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
            <h6 className="my-0">{EventTypeMap[item[0]]}</h6>
            <small className="text-muted">{item[3] || '-'}</small>
        </div>
        <span className="text-muted">{item[1]}</span>
    </li>
);
function ResultTable({ results, eventName }) {
    return (
        <div>
            <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">{eventName}</span>
                <span className="badge badge-secondary badge-pill">{results.length}</span>
            </h4>
            <ul className="list-group mb-3">
                {results.map((item, index) => <ResultLi item={item} key={index} />)}
            </ul>
        </div>
    );
}

ReactDOM.render(
    <ResultTable results={EventMaxResults} eventName={EventName} />,
    document.getElementById('result-table'),
);

const ResultItem = ({ item, index }) => (
    <div className="input-group">
        <h5 className="d-flex justify-content-between align-items-center mb-3">
            <div>
                <h6 className="my-0">{index+1}. {EventTypeMap[item[0]]} - {item[1]}</h6>
                {
                    item[3] &&
                    <small className="text-muted">{item[3]}</small>
                }
            </div>
        </h5>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Sec</span>
            </div>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                aria-describedby="basic-addon1" />
            <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">9875</span>
            </div>
        </div>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Res</span>
            </div>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                aria-describedby="basic-addon1" />
            <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">9875</span>
            </div>
        </div>
    </div>
);

function ResultCalculator({ results, eventName }) {
    return (
        <div>
            <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span >Result Calculator - {eventName}</span>
                <span className="badge badge-secondary badge-pill">{results.length}</span>
            </h4>
            <div class="row">
                {results.map((item, index) => <ResultItem item={item} index={index} key={index} />)}
            </div>
        </div>
    );
}

// ReactDOM.render(

//     <ResultCalculator results={EventMaxResults} eventName={EventName} />,
//     document.getElementById('result-calculator'),
// );
