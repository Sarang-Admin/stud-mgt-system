import "./dashboard.scss";
import TopBox from "../components/dashboard/topbox/TopBox";
import Chartbox from "../components/dashboard/chartbox/Chartbox";
import BarchartBox from "../components/dashboard/barchartbox/BarchartBox";
import PieChartBox from "../components/dashboard/piechartbox/PieChartBox";
import BigChartBox from "../components/dashboard/bigchartbox/BigChartBox";
import {
  chartBoxUser,
  chartBoxTeacher,
  chartBoxStudent,
  chartBoxSubject,
  barChartBoxResult,
  barChartFeesCollected,
} from "../data";

export default function Dashboard() {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <Chartbox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <Chartbox {...chartBoxTeacher} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <Chartbox {...chartBoxStudent} />
      </div>
      <div className="box box6">
        <Chartbox {...chartBoxSubject} />
      </div>
      <div className="box box7">
        <BigChartBox />
      </div>
      <div className="box box8">
        <BarchartBox {...barChartBoxResult} />
      </div>
      <div className="box box9">
        <BarchartBox {...barChartFeesCollected} />
      </div>
    </div>
  );
}
