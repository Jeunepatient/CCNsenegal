import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import classe from './homepage.module.css'

ChartJS.register(ArcElement, Tooltip, Legend);

const Piechart = () => {
   
    const data = {
        labels : ['Jan','Feb','Mar'],
        datasets : [
            {
                label : 'sales for the 5 first months',
                data : [3, 2 , 2],
                backgroundColor: [
                    '#7fffd4',
                    '#00bfff',
                    '#ffe4c4',
                    
                  ],
                  borderColor: [
                    '#7fffd4',
                    '#00bfff',
                    '#ffe4c4',
                  ]
            },
            
        ]
    }

    const options = {
        title : {
            display : true,
            text : 'Line chart'
        }
    }
    return ( 
        <div className={classe.pie}>
            <div className={classe.title}>the overall managment</div>
            <Pie data={data} />
        </div>
     );
}
 
export default Piechart;