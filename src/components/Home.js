import ClicksComponent from "./ClicksComponent";
import StatesComponent from "./StatesComponent";
import StatesArrayComponent from "./StatesArrayComponent/StatesArrayComponent";
import { PropComponent } from "./PropComponent";

const Home = () => {

    return (
        <div className="home">
            <h2>Homepage</h2>
            <ClicksComponent></ClicksComponent>
            <StatesComponent></StatesComponent>
            <PropComponent type="button" classes={['top-spacing', 'c2']} text="this is an example prop component"></PropComponent>
            <StatesArrayComponent></StatesArrayComponent>
        </div>
    );
}

export default Home;