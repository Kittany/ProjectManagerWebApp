import React, { Component } from 'react'
import '../../Styles/CCUserProfile.css'
import { Bar, Line, Pie } from 'react-chartjs-2';



export default class CCUserStatics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['Skype', 'Google', 'Youtube'], // change this to user project array from DB
                datasets: [
                    {
                        label: 'Projects',
                        data: [ // 
                            11111,
                            22222,
                            33333
                        ],
                        backgroundColor: [
                            'green',

                        ]
                    }
                ]
            }
        }
    }



    render() {
        return (
            <div id="CCUserStatics" style={{ width: "100%", height: "60%"}}>
                <div className="chart" style={{ width: "100%", height: "100%" }}>
                    <Bar
                        data={this.state.chartData}
                        width={100}
                        height={50}
                        options={{ maintainAspectRatio: false }}
                    />
                </div>
            </div>
        )
    }
}