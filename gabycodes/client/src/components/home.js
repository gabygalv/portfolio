import React from 'react';
import { Header, Grid, Image, Card, SegmentInline, Segment } from 'semantic-ui-react';
import '../App.css';

export default function Home() {

  return (
    <div >
      <Grid >
        <Grid.Row >
            <div className='intro' >Hey! I'm Gaby</div>
            <div className='subheading'>I'm a software engineer</div>
            {/* <div className='subheading'>I'm a forever student</div>
            <div className='subheading'>I'm a problem solver</div>
            <div className='subheading'>I'm a friend</div> */}

        </Grid.Row>
      </Grid>
    </div>
    )}