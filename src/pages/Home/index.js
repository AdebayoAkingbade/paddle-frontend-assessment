import React from "react";
import { FBLogo, INLogo, LNLogo, TWLogo, YTLogo } from "../../assets/icons";
import Card from "../../components/Card";
import TextInput from "../../components/Inputs/TextInput";
import Subscribe from "../../components/Subscribe";

const Home = () => {
  return (
    <div className="home">
        <div className="ball left" />
        <div className="ball right" />
        <div className="ball bottom" />
      <main>
        <h1>something awesome is coming soon</h1>
        <p className="info">
          Your all-in-one affiliate marketing tracking software <b>track</b>,{" "}
          <b>automate</b> and <b>optimize</b> your campaigns.
        </p>
        <div className="card-wrapper">
          <Card number="7" title="Days" />
          <Card number="24" title="Hours" />
          <Card number="54" title="Minutes" />
          <Card number="11" title="Second" />
        </div>
        <div className="input-wrapper">
          <TextInput type="text" placeholder="First Name" />
          <TextInput type="text" placeholder="Last Name" />
        </div>
        <Subscribe />
      </main>
        <footer>
          <div className="glass-bg">
            <div className="content">
              <div className="icons-terms">
                <div className="icons">
                    <YTLogo />
                    <FBLogo />
                    <LNLogo />
                    <INLogo />
                    <TWLogo />
                </div>
                <div className="terms">
                  <p>Terms of services</p>
                  <p>Privacy policy</p>
                </div>
              </div>
              <p>Copyright 2021 @ Peddle Technologies. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
    </div>
  );
};

export default Home;
