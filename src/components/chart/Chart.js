import React, { useEffect, useRef, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import '../../styles/chart.css';

function ChartComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef(null);

  const options = {
    chart: {
      type: 'pie'
      
    },
    title: {
      text: '',
    },
    colors: ['#347928', '#C0EBA6','#FCCD2A','#FFFBE6'],
    plotOptions: {
      pie: {
        innerSize: '70%',
      },
    },
    series: [{
      data: [
        ['8. Our Advanced Machinery', 12.5],
        ['7. Our Quality Manufacturing', 12.5],
        ['6. Our Experience', 12.5],
        ['5. Our Approach', 12.5],
        ['4. Our Engineering support', 12.5],
        ['3. Our Cost Competitiveness', 12.5],
        ['2. Our Logistics', 12.5],
        ['1. One stop Solution', 12.5],
      ],
    }],
    credits: {
      enabled: false,
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the chart is visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the chart is visible
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);

  return (
    <div id="container" className="chart-div" ref={chartRef}>
      <center><h2>Why choose BPL?</h2></center><br/><br/><br/>
      {isVisible && (
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
      )}
    </div>
  );
}

export default ChartComponent;
