import Column from "./Column";
import './Mainpage.css'

function Row(props) {
  return (
    <div className="row">
    {props.row.columns.map((col)=>(<Column col={col} />))}
    </div>
  );
}

export default Row;
