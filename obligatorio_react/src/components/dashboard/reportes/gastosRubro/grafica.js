import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Grafica extends Component {
    constructor(props) {
      super(props);

      this.state = {
        series: [],
        options: {}        
      };
    }  

    cargarGrafica = (nombres, montos) => {  
      return new Promise( (resolve, reject) => {
        let nombs = [];
        let porcentajes = [];
        let auxPorcentajes = [];
        let total = 0;
        montos.find( e => {
          let auxName = nombres.find(f => f.id == e.id);
          auxPorcentajes.push(parseInt(e.total));
          nombs.push(auxName.nombre);
        });
        porcentajes = auxPorcentajes.forEach(()=>{

        });
        total = auxPorcentajes.reduce((anterior, actual) => actual += anterior);
        porcentajes = auxPorcentajes.map( (e) => parseFloat((e*100)/total).toFixed(1));
        (nombs.length > 0 && porcentajes.length > 0) && nombs.length === porcentajes.length ? resolve({nombs, porcentajes, total}) : reject();
      });        
         
    };

    componentDidMount(){
      const {nombres, montos} = this.props;
      if(nombres && nombres.length > 0 && montos && montos.length > 0){
        this.cargarGrafica(nombres, montos).then(result =>{          
          this.setState({
            series: result.porcentajes,
            options: {
              chart: {
                height: 350,
                type: 'radialBar',
              },
              colors:['#82a1b1','#6b8491', '#556872','#414e55', '#2d3539' , '#1a1e20'],
              plotOptions: {
                radialBar: {
                  dataLabels: {
                    name: {
                      fontSize: '22px',
                    },
                    value: {
                      fontSize: '16px',
                    },
                    total: {
                      show: true,
                      label: 'Total',
                      formatter: function (w) {
                        console.info(w);
                        return result.total;
                      }
                    }
                  }
                }
              },
              labels: result.nombs,
            }           
          });
        });
      }        
    }

    render() {
      
      return (
        <div id="chart">
          <Chart options={this.state.options} series={this.state.series} type="radialBar"  />          
        </div>
      );
    }   
}

export default Grafica;