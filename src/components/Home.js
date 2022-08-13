import ClicksComponent from './ClicksComponent'
import StatesComponent from './StatesComponent'
import StatesArrayComponent from './0_StatesArrayComponent/StatesArrayComponent'
import { PropComponent } from './PropComponent'
import UseEffectPromiseComponent from './1_UseEffectPromiseComponent/UseEffectPromiseComponent'

const Home = () => {
  return (
    <div className="home">
      <h2>Homepage</h2>
      <ClicksComponent></ClicksComponent>
      <StatesComponent></StatesComponent>
      <PropComponent
        type="button"
        classes={['top-spacing', 'c2']}
        text="this is an example prop component"
      ></PropComponent>
      <StatesArrayComponent></StatesArrayComponent>
      <UseEffectPromiseComponent></UseEffectPromiseComponent>
    </div>
  )
}

export default Home
