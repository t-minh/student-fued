import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  BarChart,
  Bar,
  AreaChart,
  Area,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import cyan from '@material-ui/core/colors/cyan';
import lime from '@material-ui/core/colors/lime';
import { data1, data2 } from 'dan-api/chart/chartMiniData';
import colorfull from 'dan-api/palette/colorfull';
import { CounterWidget } from 'dan-components';
import styles from 'dan-components/Widget/widget-jss';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

const colors = [red[300], blue[300], cyan[300], lime[300]];

class ChartInfographicStudent extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.rootCounter}>
        <Grid container spacing={16}>
          <Grid item md={4} xs={6}>
            <CounterWidget
              color={colorfull[6]}
              start={0}
              end={45}
              duration={3}
              title="Che.."
            >
              {/* <PieChart width={100} height={100}>
                <Pie
                  data={data2}
                  cx={50}
                  cy={50}
                  dataKey="value"
                  innerRadius={20}
                  outerRadius={40}
                  fill="#FFFFFF"
                  paddingAngle={5}
                >
                  {
                    data2.map((entry, index) => <Cell key={index.toString()} fill={colors[index % colors.length]} />)
                  }
                </Pie>
              </PieChart> */}
              <Button variant="outlined" style={{ border: '2px solid white', marginRight: '10px'}}>
                <NavLink to="/app/pages/timeline" style={{ textDecoration: 'none', color: 'white'}}>Discussion</NavLink>
              </Button>
              <Button variant="outlined" style={{ border: '2px solid white' }}>
                <NavLink to="/app/ui/card-papper" style={{ textDecoration: 'none', color: 'white' }}>Join Class</NavLink>
              </Button>
            </CounterWidget>
          </Grid>
          {/* <Grid item md={4} xs={6}>
            <CounterWidget
              color={colorfull[3]}
              start={0}
              end={25}
              duration={3}
              title="Biology"
            > */}
              {/* <BarChart width={100} height={40} data={data1}>
                <Bar dataKey="uv" fill="#ffffff" />
              </BarChart> */}
              {/* <Button variant="outlined" style={{ border: '2px solid white', marginRight: '10px'}}>
                <NavLink to="/app/pages/timeline" style={{ textDecoration: 'none', color: 'white'}}>Discussion</NavLink>
              </Button>
              <Button variant="outlined" style={{ border: '2px solid white' }}>
                <NavLink to="/app/ui/card-papper" style={{ textDecoration: 'none', color: 'white' }}>Join Class</NavLink>
              </Button>
            </CounterWidget>
          </Grid> */}
          <Grid item md={4} xs={6}>
            <CounterWidget
              color={colorfull[5]}
              start={0}
              end={40}
              duration={3}
              title="Geo.."
            >
              {/* <AreaChart width={100} height={60} data={data1}>
                <Area type="monotone" dataKey="uv" stroke="#FFFFFF" fill="rgba(255,255,255,.5)" />
              </AreaChart> */}
              <Button variant="outlined" style={{ border: '2px solid white', marginRight: '10px'}}>
                <NavLink to="/app/pages/timeline" style={{ textDecoration: 'none', color: 'white'}}>Discussion</NavLink>
              </Button>
              <Button variant="outlined" style={{ border: '2px solid white' }}>
                <NavLink to="/app/ui/card-papper" style={{ textDecoration: 'none', color: 'white' }}>Join Class</NavLink>
              </Button>
            </CounterWidget>
          </Grid>
          <Grid item md={4} xs={6}>
            <CounterWidget
              color={colorfull[4]}
              start={0}
              end={28}
              duration={3}
              title="Art"
            >
              {/* <LineChart width={100} height={80} data={data1}>
                <Line type="monotone" dataKey="pv" stroke="#FFFFFF" strokeWidth={2} />
              </LineChart> */}
              <Button variant="outlined" style={{ border: '2px solid white', marginRight: '10px'}}>
                <NavLink to="/app/pages/timeline" style={{ textDecoration: 'none', color: 'white'}}>Discussion</NavLink>
              </Button>
              <Button variant="outlined" style={{ border: '2px solid white' }}>
                <NavLink to="/app/ui/card-papper" style={{ textDecoration: 'none', color: 'white' }}>Join Class</NavLink>
              </Button>
            </CounterWidget>
          </Grid>
        </Grid>
      </div>
    );
  }
}

ChartInfographicStudent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChartInfographicStudent);
