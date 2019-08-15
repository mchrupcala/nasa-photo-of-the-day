import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class MenuExampleBasic extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name="upcoming missions"
          active={activeItem === "upcoming missions"}
          onClick={this.handleItemClick}
        >
          Upcoming Missions
        </Menu.Item>

        <Menu.Item
          name="nasalive"
          active={activeItem === "nasalive"}
          onClick={this.handleItemClick}
        >
          NASA Live
        </Menu.Item>

        <Menu.Item
          name="nasatv"
          active={activeItem === "nasatv"}
          onClick={this.handleItemClick}
        >
          NASA TV
        </Menu.Item>

        <Menu.Item
          name="galleries"
          active={activeItem === "galleries"}
          onClick={this.handleItemClick}
        >
          Galleries
        </Menu.Item>
      </Menu>
    );
  }
}
