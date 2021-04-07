import logo from './logo.svg';
import './DashboardAnalytics.css';
import { useState, useEffect } from 'react';
import { getGaNewUsersData, getGaBounceRateData, getGaSourceData, getGaMostPageViewsData } from './google-analytics.service';
import yellowFooterDash from './icons/yellow-footer-dash.svg';
import lightYellowFooterDash from './icons/light-yellow-footer-dash.svg';
import redFooterDash from './icons/red-footer-dash.svg';
import blueFooterDash from './icons/blue-footer-dash.svg';
import LineChart from './charts/line/line-chart';
import PieChart from './charts/pie/pie-chart';
import HLineChart from './charts/line/h-line-chart';
 
function DashboardAnalytics() {
  const [newUsersData, setNewUsersData] = useState(null);
  const [bounceRateData, setBounceRateData] = useState(null);
  const [sourceData, setSourceData] = useState(null);
  const [pageViewsData, setPageViewsData] = useState(null);
  const [startDate, setStartDate] = useState('7daysAgo');
  const [endDate, setEndDate] = useState('today');
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPageViews, setTotalPageViews] = useState(0);
  useEffect(() => {
    getGaNewUsersData(startDate, endDate).then(
      (result) => {
        setNewUsersData(result);
      }
    )
    getGaBounceRateData(startDate, endDate).then(
      (result) => {
        setBounceRateData(result);
      }
    )
    getGaSourceData(startDate, endDate).then(
      (result) => {
        setSourceData(result);
        setTotalUsers(result?.totals?.[0]?.values?.[0] || 0)
      }
    )
    getGaMostPageViewsData(startDate, endDate).then(
      (result) => {
        setPageViewsData(result?.data?.reports?.[0]?.data);
        console.log({totalPageViews: result?.totals, result})
        setTotalPageViews(result?.data?.reports?.[0]?.data?.totals?.[0]?.values?.[0] || 0)
      }
    )
  }, [startDate, endDate]);
  
  return (
    <div className="DashboardAnalytics">
      <div className="metrics">
        <div className="box">
          <div className="box-infos">
            <div className="box-number">{newUsersData?.totalsForAllResults?.['ga:newUsers']}</div>
            <div className="box-title">Nouveaux visiteurs</div>
          </div>
          <img className="img-footer" src={yellowFooterDash} width="178px" />
        </div>

        <div className="box">
          <div className="box-infos">
            <div className="box-number">{parseFloat(bounceRateData?.totalsForAllResults?.['ga:bounceRate'])?.toFixed(2)}%</div>
            <div className="box-title">Taux de rebonds</div>
          </div>
          <img className="img-footer" src={redFooterDash} width="178px" />
        </div>

        <div className="box">
          <div className="box-infos">
            <div className="box-number">{totalUsers}</div>
            <div className="box-title">Utilisateurs</div>
          </div>
          <img className="img-footer" src={blueFooterDash} width="178px" />
        </div>

        <div className="box">
          <div className="box-infos">
            <div className="box-number">{totalPageViews}</div>
            <div className="box-title">Page vues</div>
          </div>
          <img className="img-footer" src={lightYellowFooterDash} width="178px" />
        </div>

        <div className="box">
          <div className="box-infos">
            <div className="box-number">0€</div>
            <div className="box-title">Chiffre d'affaires</div>
          </div>
          <img className="img-footer" src={redFooterDash} width="178px" />
        </div>
      </div>



      <div className="charts">
        <div className="col-6">
          <LineChart data={newUsersData}/>
        </div>
        <div className="col-6">
          {
            sourceData && totalUsers
            ?
              <PieChart data={sourceData} total={totalUsers}/>
            :
            <></>
          }
        </div>
      </div>
      <div className="charts">
      <div className="col-8">
          {
            pageViewsData && totalPageViews
            ?
              <HLineChart data={pageViewsData} total={totalPageViews}/>
            :
            <></>
          }
        </div>
      </div>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default DashboardAnalytics;
