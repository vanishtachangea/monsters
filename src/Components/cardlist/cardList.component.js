import React, { Component } from "react";
import "../cardlist/cardList.styles.css";
import { Card } from "../card/card.component";

class CardList extends Component {
  render() {
    return (
      // <div>
      //   <h3>Card List</h3>
      <div className="cardList">
        {this.props.monsters.map((monster) => {
          //   return <div id={monster.id}>{monster.name}</div>;
          return <Card monster={monster} />;
        })}
      </div>
      // </div>
    );
  }
}

export default CardList;
