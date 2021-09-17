import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { SourceReader, PapperBlock } from 'dan-components';
import {
  StandardCards,
  ControlCards,
  PaperSheet,
  SocialCards,
  EcommerceCards
} from './demos';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';

const styles = theme => ({
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Cards extends React.Component {
    state = {
    open: false,
    openSlide: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleClickOpenSlide = () => {
    this.setState({ openSlide: true });
  };

  handleCloseSlide = () => {
    this.setState({ openSlide: false });
  };
  render() {
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const docSrc = 'containers/UiElements/demos/Cards/';
    const { classes } = this.props;
    const { open, openSlide } = this.state;  
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
        {/* <PapperBlock title="Paper" icon="ios-document-outline" desc="In material design, the physical properties of paper are translated to the screen.">
          <div>
            <PaperSheet />
            <SourceReader componentName={docSrc + 'PaperSheet.js'} />
          </div>
        </PapperBlock> */}
        <PapperBlock title="Camera" icon="ios-card-outline" desc="You must turn on your camera during the quiz">
          <div>
            <StandardCards />
            <button style={{color: 'white', background:'white'}} onClick={this.handleClickOpen}> Hellossss</button>
            <Dialog
              open={open}
              onClose={this.handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Fun Quiz"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  What does h20 stand for?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button variant="outlined" color="primary" onClick={this.handleClose}>
                  Option 1
                </Button>
                <Button variant="outlined" color="secondary" onClick={this.handleClose}>
                  option 2
                </Button>
                <Button variant="contained" color="primary" onClick={this.handleClose}>
                  Option 3
                </Button>
                <Button variant="contained" color="secondary" onClick={this.handleClose}>
                  Option 4
                </Button>
              </DialogActions>
            </Dialog>
            {/* <SourceReader componentName={docSrc + 'StandardCards.js'} /> */}
          </div>
        </PapperBlock>
        {/* <PapperBlock title="Control Cards" icon="ios-play-outline" desc="Supplemental actions within the card are explicitly called out using icons, text, and UI controls.">
          <div>
            <ControlCards />
            <SourceReader componentName={docSrc + 'ControlCards.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Social Cards" icon="ios-photos-outline" desc="A Customized material-ui card that contain profile elements">
          <div>
            <SocialCards />
            <SourceReader componentName={docSrc + 'SocialCards.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Ecommerce Cards" icon="ios-cart-outline" desc="A Customized material-ui card that contain product information">
          <div>
            <EcommerceCards />
            <SourceReader componentName={docSrc + 'EcommerceCards.js'} />
          </div>
        </PapperBlock> */}
      </div>
    );
  }
}

export default Cards;
