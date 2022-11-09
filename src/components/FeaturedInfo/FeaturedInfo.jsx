import './featuredInfo.css'
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import ArrowUpward from '@mui/icons-material/ArrowUpward';

const FeaturedInfo = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,123</span>
                <span className="featuredMoneyRate">-11.2
                <ArrowDownward className="featuredIcon negative"/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,000</span>
                <span className="featuredMoneyRate">-11.2
                <ArrowDownward className="featuredIcon negative"/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$1,123</span>
                <span className="featuredMoneyRate">+3.2
                <ArrowUpward className="featuredIcon"/>
                </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
    </div>
  )
}

export default FeaturedInfo

