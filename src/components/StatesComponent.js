import { useState } from "react"

/**
 *
 * Reactive variables useState() hook
 * 1.import useState from react
 * 2.declare tuple:: const [stateName, setStateName] = useState(initialValue)
 *
 */

const StatesComponent = () => {

    //simple
    const [state, setState] = useState('initial State')
    const [name, setName] = useState('initial Name')
    const [age, setAge] = useState(28)

    const handleSimpleStates = () => {
        setState('new State') // static
        setName(`${name} addSmth`) // dynamic string
        setAge(age => age += 1) // with arrowFn
    }


    return (
        <div className="component">
            <h2>useState hook</h2>
            <hr />
            <div className="states">
                <h3 className="top-spacing">State: {state}</h3>
                <h3 className="top-spacing">Name: {name}</h3>
                <h3 className="top-spacing">Age: {age}</h3>
                <button className="top-spacing" onClick={handleSimpleStates}>Modify the simple States</button>
            </div>
        </div>
    );
}

export default StatesComponent;