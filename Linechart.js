import plot from './homepage.module.css'
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

 
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );







const Linechart = () => {
   
    const data = {
        labels : ['Jan','Feb','Mar','Apr','May'],
        datasets : [
            {
                label : 'exportations',
                data : [3, 2 , 2, 1 , 5],
                backgroundColor: [
                    '#7fffd4',
                   
                    
                  ],
                  borderColor: [
                    '#00bfff',
                    '#7fffd4',
                    '#00bfff',
                    '#ffe4c4',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                  ]
               
            },
            {
                label : 'shipment',
                data : [1, 3, 3, 2, 3],
                backgroundColor: [
                    '#00bfff',
                   
                    
                  ],
                  borderColor: [
                   
                    '#ffe4c4',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                  ]
                
            },
            {
                label : 'article',
                data : [1, 8, 3, 7, 6],
                backgroundColor: [
                    '#ffe4c4',
                    
                    
                  ],
                  borderColor: [
                   
                    '#ffe4c4',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                  ]
                
            }
        ]
    }
    return ( 
        <div className={plot.both}>
          <div className={plot.title}>the overall managment</div>
            <Line data={data} />
        </div>
     );
}
 
export default Linechart;