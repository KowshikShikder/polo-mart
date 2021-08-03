import React from 'react'
import './Chart.css'
import { Pie, Bar, Bubble, Doughnut, Radar, PolarArea, Scatter, Line } from 'react-chartjs-2'



export default function Chart() {
    return (
        <>
        <div className="title">
            Statistics

        </div>

        <div  className="chart-main">  
        
            <div className="chart">
    <Bar
        data={{
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [
                {
                    type: 'pie',
                    label: 'Quantity',
                    data: [0, 12, 25, 27],
                    backgroundColor: [ 
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)'
                ],
                    borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'],
    
                    borderWidth: 1,
    
                },
                
              ],
            }}
        height={400} //charts height
        width={600}  //charts width
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,  // to start with zero
                },
              },
            ],
          },
          legend: {
            labels: {
              // fontSize: 25, //custom font size 
            },
          },
        }}
      />
    </div>

    <div className="chart">

    <Line
        data={{
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [
            {
                type: 'line',
                label: 'One',
                data: [5, 9, 20, 25],
                cubicInterpolationMode: 'monotype',
                // cubicInterpolationMode: 'monotone',
                tension: 0.6,
                backgroundColor: [ 
                    'rgba(255, 99, 32, 0.6)',
                    'rgba(54, 62, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 12, 192, 0.6)',
                    'rgba(15, 102, 255, 0.6)',
                    'rgba(255, 19, 64, 0.6)'
            ],
                borderColor: ["black"

            ],

                borderWidth: 2,

            },
            
            {
                // type: 'line',
                label: 'Two',
                data: [10, 15, 17, 28],
                // cubicInterpolationMode: 'monotype',
                tension: 0.5,

                backgroundColor: [ 
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
            ],
                borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'],

                borderWidth: 1,

            },
            
          ],
        }}
        height={400} //charts height
        width={600}  //charts width
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,  // to start with zero
                },
              },
            ],
          },
          legend: {
            labels: {
              // fontSize: 25, //custom font size 
            },
          },
        }}
      />

    </div>
    </div>
            
        </>
    )
}
