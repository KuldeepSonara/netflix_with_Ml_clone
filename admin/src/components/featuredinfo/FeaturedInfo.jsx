import { ArrowDownward, ArrowUpward } from "@mui/icons-material"
import "./FeaturedInfo.scss"

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTital">Revanue</span>
        <div className="featuredMoneyContiner">
            <span className="featuredMoney">$2,415</span>
            <span className="featuredRate">-11.4 <ArrowDownward className="featuredIcon nagative"/> </span>        
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTital">Sales</span>
        <div className="featuredMoneyContiner">
            <span className="featuredMoney">$4,415</span>
            <span className="featuredRate">-1.4 <ArrowDownward className="featuredIcon nagative"/> </span>        
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTital">Cost</span>
        <div className="featuredMoneyContiner">
            <span className="featuredMoney">$2,535</span>
            <span className="featuredRate">2.4 <ArrowUpward className="featuredIcon"/> </span>        
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  )
}

export default FeaturedInfo
