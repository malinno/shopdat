'use client'
import React, { useEffect } from 'react';
import Highcharts from 'highcharts';

export default function Revenue() {
  useEffect(() => {
    Highcharts.chart('container', {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Simple Column Chart with Index Labels',
      },
      xAxis: {
        categories: ['20', '40', '60', '80', '100', '120'],
      },
      yAxis: {
        title: {
          text: '', // Thay đổi tiêu đề của trục tung
        },
        labels: {
          formatter: function() {
            return this.value + ''; // Thay đổi định dạng hiển thị giá trị của trục tung
          },
        },
      },
      credits: {
        enabled: false, // Tắt hiển thị logo và liên kết highcharts.com
      },
      plotOptions: {
        column: {
          pointWidth: 30, // Điều chỉnh độ rộng của các cột
        },
      },
      series: [{
        name: 'Series 1',
        data: [10, 15, 7, 12, 9, 11],
      }, {
        name: 'Series 2',
        data: [5, 8, 12, 6, 10, 13],
      },
      {
        name: 'Series 3',
        data: [5, 8, 12, 6, 10, 13],
      }],
    });
  }, []);

  return (
    <div>
      <div id="container" className="mx-auto w-9/12 flex items-center justify-center my-5"></div>
    </div>
    
  );
}

