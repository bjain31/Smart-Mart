import React from 'react';
import './MainDisplay.css';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Grid, Card, CardContent, CardHeader } from '@material-ui/core';

function MainDisplay() {
    return (
        <div className="App-main">
      <header className="App-header">
        
        <h2 style={{marginLeft: "10px"}}>Smart Mart</h2>
        <Router>
        <div
          className="App-link"
        >
        <Link style={{color: "white"}} to={"/Invoice"}>Invoice</Link>
        &ensp;
        <Link style={{color: "white"}} to={"/Purchase"}>Purchase</Link>
        </div>
        <Switch>
            <Route path={"/Invoice"}>
            </Route>
            <Route path={"/Purchase"}>
            </Route>
        </Switch>
        </Router>
        {/* <a
          className="App-link"
          href="./Purchase.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Purchase
        </a> */}
        <button className="btn">Logout</button>
      </header>
      <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
      >
      <Card className="cards">
          <CardHeader title="Last 28 days sales"/>
          <CardContent>₹ ____</CardContent>
      </Card>
      &ensp;
      <Card className="cards">
      <CardHeader title="Last 7 days sales"/>
          <CardContent>₹ ____</CardContent>
      </Card>
      &ensp;
      <Card className="cards">
      <CardHeader title="Yesterday's sale"/>
          <CardContent>₹ ____</CardContent>
      </Card>
      </Grid>
      <br/><br/>
      <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
      >
      <Card className="cards1">
          <CardHeader title="Most Purchased Item"/>
          <CardContent>Item Name</CardContent>
      </Card>
      &ensp;
      <Card className="cards1">
          <CardHeader title="Least Purchased Item"/>
          <CardContent>Item Name</CardContent>
      </Card>
      </Grid>
      &ensp;
      <Card className="cards2">
          <CardHeader title="Out of Stock Items"/>
          <CardContent>Out of Stock Items</CardContent>
      </Card>
      <footer className="App-footer">Footer Data Display Here</footer>
    </div>
    )
}

export default MainDisplay;
