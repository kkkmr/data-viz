import { useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip);

const chartData = {
  labels: ['', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Oct'],
  datasets: [
        {
            type: 'line' as const,
            data: [40000, 20000, 60000, 40000, 90000, 60000, 60000, 80000],
            borderColor: '#C8E972',
            backgroundColor: 'transparent',
            fill: false,
            pointRadius: (ctx:any) => ([2, 4].includes(ctx.dataIndex) ? 5 : 0),
            pointHoverRadius: 6,
            pointBorderColor: '#C8E972',
            pointBorderWidth: 3,
            pointBackgroundColor: 'black',
            tension: 0,
            order: 1,
        }
    ]
};

const customTooltip = (context:any) => {
  const { chart, tooltip } = context;
  let tooltipEl = document.getElementById('chartjs-custom-tooltip');

  if (!tooltipEl) {
    tooltipEl = document.createElement('div');
    tooltipEl.id = 'chartjs-custom-tooltip';
    tooltipEl.className = 'absolute top-4 left-1/2 -translate-x-1/2 z-50 bg-[#222324] rounded px-4 py-2 text-sm border-[#525252] border-2';
    tooltipEl.style.transition = 'opacity 0.2s ease';
    tooltipEl.style.pointerEvents = 'none';
    chart.canvas.parentNode.appendChild(tooltipEl);
  }

  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = '0';
    return;
  }

  if (tooltip.body) {
    const value = tooltip.dataPoints[0].formattedValue;
    tooltipEl.innerHTML = `
        <div class="text-white flex justify-between mb-4">
             <span class="text-xl font-semibold">$${parseInt(value)}k</span>
             <span class="self-center"><img src="./question_mark.svg" alt="" class="self-center"/></span>
        </div>
        <div class="text-gray-500 text-xs mb-1 flex justify-between gap-2">
            <span><img src="./arrow_up.svg" alt=""/></span>
            <span>4.6% above target</span>
        </div>`;
  }

  const { offsetLeft, offsetTop } = chart.canvas;
  tooltipEl.style.left = offsetLeft + tooltip.caretX + 'px';
  tooltipEl.style.top = offsetTop + tooltip.caretY - 85 + 'px';
  tooltipEl.style.opacity = '1';
};

const chartOptions = {
  responsive: true,
  plugins: {
    tooltip:{
        enabled:false,
        external:customTooltip,
    },
    legend: { display: false },
  },
   scales: {
    y: {
      beginAtZero: true,
      max: 100000,
      ticks: {
        stepSize: 20000,
        callback: (v:any) => `$${v / 1000}K`,
        color: 'white'
      },
      grid: {
        color: '#343434', // soft grid lines
      },
      border: {
        color: '#575757', // Y-axis line
      },
    },
    x: {
      grid: { display: false },
        ticks:{
            color:'white'
        },
        border:{
            color:'#575757'
        }
    }
  },
};

const LineChart = () => {
  const chartRef = useRef<ChartJS<'line'>>(null);

  return (
    <div className='w-[100%] lg:w-[50%] mb-12'>
        <span className="text-2xl font-semibold">Graphs</span>
        <div className="bg-[#222324] p-4 rounded shadow border-[#525252] border-[1px] mt-4 relative h-[100%]">
            <div className='flex gap-4 justify-between p-2 bg-black border-[#525252] border-[1px] rounded-sm w-fit absolute right-18'>
                <span className='text-sm font-semibold'>Unsatisfied Demand %</span>
                <span className='self-center'>
                    <img src="./arrow_down.svg" alt=""/>
                </span>
            </div>
            <div className='pt-18 pl-4 pr-12'>
                <Line ref={chartRef} data={chartData} options={chartOptions} />
            </div>
      </div>
    </div>
  );
};

export default LineChart;
