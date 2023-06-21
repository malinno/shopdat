'use client'
import React, { useEffect } from 'react';
import Highcharts from 'highcharts';

export default function Subcri() {
  useEffect(() => {
    // Create the chart
    Highcharts.chart('chartContainer', {
      chart: {
        type: 'line',
      },
      title: {
        text: 'Average High & Low Temperature',
      },
      subtitle: {
       
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      yAxis: {
        title: {
          text: 'Temperature',
        },
      },
      credits: {
        enabled: false, // Tắt hiển thị logo và liên kết highcharts.com
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true,
          },
          enableMouseTracking: false,
        },
      },
      series: [
        {
          name: 'Reggane',
          data: [16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2, 22.0, 17.8],
        },
        {
          name: 'Tallinn',
          data: [-2.9, -3.6, -0.6, 4.8, 10.2, 14.5, 17.6, 16.5, 12.0, 6.5, 2.0, -0.9],
        },
      ],
    });
  }, []);

  return (
    <div>
     
      <div id="chartContainer" className="mx-auto w-9/12 flex items-center justify-center my-5"></div>
    </div>
  );
}
