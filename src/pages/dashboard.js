import React from 'react';
import BarGraphExample from '../components/barChart';
import AreaGraphExample from '../components/areaChart';
import PieGraphExample from '../components/pieChart';
import LineGraphExample from '../components/lineChart';
import RadarGraphExample from '../components/radarChart';
import './dashboard.css'; 

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1 className="page-title">Dashboard</h1> 
            <div className="graph-container">
                <div className="graph-item"><BarGraphExample /></div>
                <div className="graph-item"><AreaGraphExample /></div>
                <div className="graph-item"><PieGraphExample /></div>
                <div className="graph-item"><LineGraphExample /></div>
                <div className="graph-item"><RadarGraphExample /></div>
            </div>
        </div>
    );
};

export default Dashboard;
