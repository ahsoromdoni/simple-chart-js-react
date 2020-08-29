import React from 'react';
import { Line as ChartDoughnut } from 'react-chartjs-2';

class Doughnut extends React.Component {
    constructor(props) {
        super(props);
        // this.chartReference = React.createRef();
        this.data = props.data;
        this.options = props.options;
    }

    componentDidMount() {
        console.log(this.data);
        // console.log(this.chartReference); // returns a Chart.js instance reference
    }

    render() {
        return (<ChartDoughnut data={this.data} options={this.options} />)
    }
}

export default Doughnut;