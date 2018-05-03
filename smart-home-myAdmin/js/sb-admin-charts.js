// Chart.js scripts
// -- Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';
// -- Area Chart Example
var ctx = document.getElementById("myAreaChart");


var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["0时", "1时", "2时", "3时", "4时", "5时", "6时", "7时", "8时", "9时", "10时", "11时", "12时","13时", "14时", "15时", "16时", "17时", "18时", "19时", "20时", "21时", "22时", "23时", "24时" ],
    datasets: [{
      label: "温度",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [14, 14.2, 14.5, 13.5, 12.9, 13.7, 15, 17, 19, 21.2, 23.1, 24.5, 25.7,25.9,28.2,28.3,27.5,26.3,22.1,19.4,17.3,14.3,13.2,13.1,12.7],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 24
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40,
          TicksLimit: 8
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: true
    },
    
 
  }
});


	
	


// -- Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["周一", "周二", "周三", "周四", "周五", "周六","周日"],
    datasets: [{
      label: "相对湿度",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [45, 52, 47, 61, 54, 69,71],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 90,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["冰箱", "洗衣机", "空调", "电视","电脑"],
    datasets: [{
      data: [12.21, 15.58, 11.25, 8.32, 12.1],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745','#d84c29'],
    }],
  },
});
