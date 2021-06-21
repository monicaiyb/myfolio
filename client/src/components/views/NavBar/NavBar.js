import React, { useState } from "react";
import LeftMenu from "./Sections/LeftMenu";
import RightMenu from "./Sections/RightMenu";
import { Drawer, Button, Icon } from "antd";
import "./Sections/Navbar.css";
import { Container} from "@material-ui/core";

function NavBar() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Container maxWidth="lg">
      <nav
        className="menu"
        style={{ position: "fixed", zIndex: 5, width: "79rem" }}
      >
        <div className="menu__logo">
          {/* <Logo/> */}
          <a href="/">
            <img
              alt="Logo"
              src={require("./neuwelt_logo.png")}
              style={{ height: 64, width: "auto" }}
            />
          </a>
        </div>
        <div className="menu__container">
          <div className="menu_rigth" style={{marginTop:'2rem'}}>
            <RightMenu mode="horizontal" />
          </div>
          <Button
            className="menu__mobile-button"
            type="primary"
            onClick={showDrawer}
          >
            <Icon type="align-right" />
          </Button>
          <Drawer
            title="Neuwelt Portfolio"
            placement="left"
            className="menu_drawer"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <LeftMenu mode="inline" />
            <RightMenu mode="inline" />
          </Drawer>
        </div>
      </nav>
    </Container>
  );
}

export default NavBar;
