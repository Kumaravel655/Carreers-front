import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './ReportsPage.css'; // Import the new CSS file
import StatCard from '../../Components/Admin/StatCard'; // Reuse the StatCard component

// Register the components you need from Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const ReportsPage = () => {
    // TODO: Fetch this data from your backend API

    // Data for the User Registrations Line Chart
    const userRegistrationsData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Job Seekers',
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: 'rgb(59, 130, 246)',
                backgroundColor: 'rgba(59, 130, 246, 0.5)',
            },
            {
                label: 'Recruiters',
                data: [28, 48, 40, 19, 86, 27, 90],
                borderColor: 'rgb(239, 68, 68)',
                backgroundColor: 'rgba(239, 68, 68, 0.5)',
            },
        ],
    };

    // Data for the Job Postings Bar Chart
    const jobPostingsData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Jobs Posted',
                data: [120, 150, 180, 130, 210, 250, 220],
                backgroundColor: 'rgba(22, 163, 74, 0.6)',
                borderColor: 'rgb(22, 163, 74)',
                borderWidth: 1,
            },
        ],
    };
    
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: { display: false },
        },
    };

    return (
        <div className="reports-page">
            <h1>Reports & Analytics</h1>

            {/* Reusing the StatCard component for key metrics */}
            <div className="stats-grid" style={{marginBottom: '1.5rem'}}>
                <StatCard title="Total Active Jobs" value="1,420" />
                <StatCard title="New Users This Month" value="186" />
                <StatCard title="Total Applications" value="25,600" />
                <StatCard title="Companies Registered" value="750" />
            </div>

            <div className="reports-grid">
                <div className="chart-container">
                    <h2>User Registrations (Monthly)</h2>
                    <Line options={chartOptions} data={userRegistrationsData} />
                </div>
                <div className="chart-container">
                    <h2>Job Postings (Monthly)</h2>
                    <Bar options={chartOptions} data={jobPostingsData} />
                </div>
            </div>
        </div>
    );
};

export default ReportsPage;