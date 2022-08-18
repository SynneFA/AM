import './Mainpage.css'
import { useState } from 'react';

function Column(props) {
  const [title, setTitle] = useState(props.col.title);
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className={"size"+props.col.width}>
      <img src={props.col.imageUrl + "&height=300&witdh=500"}/>
      <div className={"placementContainer"}>
        <div> {isEdit && (<input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />)}{!isEdit && title}</div>
        <div className={"placmentContainerRight"}><button onClick={()=> setIsEdit(!isEdit)}>{isEdit ? "Save":"Edit title"}</button></div>
      </div>


    </div>
  );
}

export default Column;
