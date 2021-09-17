import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import Ionicon from 'react-ionicons';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import { PapperBlock } from 'dan-components';
import DetailIonIcon from './IconGallery/DetailIonIcon';
import SearchIcons from './IconGallery/SearchIcons';

const url = '/api/icons?src=';

const styles = theme => ({
  hide: {
    display: 'none'
  },
  iconsList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
    overflow: 'auto',
    maxHeight: 1000,
    position: 'relative'
  },
  iconWrap: {
    position: 'relative',
    width: 120,
    margin: 20,
    [theme.breakpoints.down('xs')]: {
      margin: 10,
    },
    textAlign: 'center'
  },
  btn: {
    display: 'block',
    textAlign: 'center',
    margin: '0 auto',
    '& svg': {
      width: 36,
      height: 36
    }
  },
  icon: {
    fontSize: 48,
  },
  preloader: {
    width: '100%'
  },
});

class IonIcons extends React.Component {
  state = {
    raws: [],
    loading: false,
    openDetail: false,
    iconName: '',
    filterText: ''
  };

  componentDidMount = () => {
    const name = 'ion-icon.txt';
    this.setState({ loading: true }, () => {
      Axios.get(url + name)
        .then(response => response.data.records[0].source)
        .then(data => {
          const namesAndCodes = data.split('\n');
          const icons = namesAndCodes.map(nameAndCode => {
            const parts = nameAndCode.split(' ');
            return {
              name: parts[0],
              code: parts[1]
            };
          });
          return icons;
        })
        .then(icons => {
          this.setState({
            raws: icons,
            loading: false
          });
        });
    });
  }

  handleOpenDetail = name => {
    this.setState({
      openDetail: true,
      iconName: name,
    });
  };

  handleCloseDetail = () => {
    this.setState({ openDetail: false });
  };

  handleSearch = (event) => {
    event.persist();
    // Show result base on keyword
    this.setState({ filterText: event.target.value.toLowerCase() });
  }

  render() {
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const {
      raws,
      loading,
      openDetail,
      iconName,
      filterText
    } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <PapperBlock title="Ion Icons" icon="ios-ionic" desc="Ion icons a beautifully crafted open source icons. Premium designed icons for use in web.">
          <div>
            {loading
              && <LinearProgress color="secondary" className={classes.preloader} />
            }
            <SearchIcons filterText={filterText} handleSearch={(event) => this.handleSearch(event)} />
            <div className={classes.iconsList}>
              {raws.map((raw, index) => {
                if (raw.name.toLowerCase().indexOf(filterText) === -1) {
                  return false;
                }
                return (
                  <div className={classes.iconWrap} key={index.toString()}>
                    <IconButton title="Click to see detail" onClick={() => this.handleOpenDetail(raw.name, raw.code)} className={classes.btn}>
                      <Ionicon icon={raw.name} />
                    </IconButton>
                    <Typography gutterBottom noWrap>{raw.name}</Typography>
                  </div>
                );
              })}
              <DetailIonIcon closeDetail={this.handleCloseDetail} isOpenDetail={openDetail} iconName={iconName} />
            </div>
          </div>
        </PapperBlock>
      </div>
    );
  }
}

IonIcons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IonIcons);
