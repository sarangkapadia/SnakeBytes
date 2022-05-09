import React from "react";
import { Button } from "../../button";
import { GraphData } from "../../graphGrid";
import "../../style/statistics.css";
import { NumberTiles } from "../../wordtiles";
import { GraphGrid } from "../graphGrid";
import worldIcon from "../../globe-white-96.png";
import userIcon from "../../user-white-90.png";
import { Score } from "../../scores";

interface IStatisticsProps {
  world: GraphData;
  personal: GraphData;
}

const nav: any = window.navigator;

export const Statistics: React.FunctionComponent<IStatisticsProps> = React.memo(
  (props) => {
    const { world, personal } = props;
    const currentScore = Score.getInstance().getCurrentScore();

    const handleOnShareClick = async () => {
      const shareData = {
        title: "Snakespeare",
        text: `Score: ${currentScore}, Highest: 80`,
        url: "https://sarangkapadia.github.io/SnakeBytes/",
      };
      try {
        await navigator.share(shareData);
      } catch (e) {
        alert(e);
      }
    };

    return (
      <div className="statsContainer">
        <div className="worldContainer">
          <div className="overlayContainer">
            <div className="iconContainer">
              <img
                className="statsIcon"
                src={worldIcon}
                alt={"world scores icon"}
              />
              <div className="iconLabel">World</div>
            </div>
            <GraphGrid grid={world.getGrid()} />
          </div>
        </div>

        <div className="personalContainer">
          <div className="overlayContainer">
            <div className="iconContainer">
              <img
                className="statsIcon"
                src={userIcon}
                alt={"user scores icon"}
              />
              <div className="iconLabel">Me</div>
            </div>
            <GraphGrid grid={personal.getGrid()} />
          </div>
        </div>

        <div className="footerContainer">
          <NumberTiles score={currentScore} />
          {nav.canShare ? (
            <Button label={"Share"} onClick={handleOnShareClick}></Button>
          ) : null}
        </div>
      </div>
    );
  }
);
