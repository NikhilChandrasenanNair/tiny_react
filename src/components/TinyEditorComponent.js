import React, { Component } from "react";
import { Editor } from "@tinymce/tinymce-react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";

class TinyEditorComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      activeTab: "1"
    };

    // reactstrap Tab
    this.toggle = this.toggle.bind(this);
  }

  // reactstrap toggle tab
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.activeTab === "1"
              })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              KRA
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.activeTab === "2"
              })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Goals and Actions
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.activeTab === "3"
              })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              Comments
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <Editor
                  initialValue={this.props.initialValue}
                  apiKey={this.props.apiKey}
                  init={this.props.init}
                />
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <form style={{ display: "none" }}>
                  <button name="submitbtn" />
                </form>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <Editor
                  initialValue={this.props.initialValue}
                  apiKey={this.props.apiKey}
                  init={this.props.init}
                />
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <form style={{ display: "none" }}>
                  <button name="submitbtn" />
                </form>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <Editor
                  initialValue={this.props.initialValue}
                  apiKey={this.props.apiKey}
                  init={this.props.init}
                />
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <form style={{ display: "none" }}>
                  <button name="submitbtn" />
                </form>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default TinyEditorComponent;
