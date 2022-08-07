/**
     * Click Handling.
     * 1. create an ArrowFn inside the component.
     * 2. if you need to pass parameters, you have to wrap the Fn into another ArrowFn
     * 3. if we do not pass parameters, we still have the event object (e) => {}
     * 4. using custom parameters, we have the event in the first arrowFn and can pass to the innerFn at any index
*/

const ClicksComponent = () => {

    const normalHandleClick = () => {
        console.log('standard click, no parameters')
    }

    const normalHandleClickHasEvent = (e) => {
        console.log('event is passed automatically')
    }

    const paramHandleClick = (param, e) => {
        //we pass event as second argument
        console.log(param)
    }

    return (
        <div className="clicks-wrapper component">
            <h2>Click handlers</h2>
            <div className="clicks">
                <button onClick={normalHandleClick}>Normal Click</button>
                <button onClick={normalHandleClickHasEvent}>Normal Click(e)</button>
                <button onClick={(ev) => paramHandleClick('pass a parameter', ev)}>Parameter Click</button>
            </div>
            <p className="top-spacing">Check the console for results.</p>
        </div>

    );
}

export default ClicksComponent;