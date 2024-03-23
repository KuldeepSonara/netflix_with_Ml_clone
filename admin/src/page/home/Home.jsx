import  Chart  from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo"
import { WidgetLg } from "../../components/widgetLg/WidgetLg"
import { WidgetSm } from "../../components/widgetSm/WidgetSm"
import "./Home.scss"
import  {Data}  from "../../data";

const Home = () => {
  
  return (
    <div className="home">
      <FeaturedInfo/>
      <Chart data={Data} title="User Analytics" grid datakeys="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}

export default Home
