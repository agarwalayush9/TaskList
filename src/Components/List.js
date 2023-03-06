import React from "react";
import PropTypes from "prop-types";
import TextareaAutosize from "react-textarea-autosize";
import { useState } from "react";
// import jsPDF from 'jspdf';
// import pdfMake from 'pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// import htmlToPdfmake from 'html-to-pdfmake';
export default function List(place) {
  // let add =()=>{
  // }
  const [val, setVal] = useState([]);
  const [text, setValue] = useState("");
  const [topictxt, setValue1] = useState("");
  // const [active, isActive] = useState(false);
  
  // let li = document.getElementById("li");
  // if(li.innerText==""){
  //   li.innerText=place.empty;
  // }
  const line = () => {
    // isActive((current) => !current);
    let li = document.getElementById("li");
    let task1 = document.getElementById("task");
    if (li.style.textDecoration == "") {
      task1.style.textDecoration = "line-through";
      li.style.textDecoration = "line-through";
    } else {
      task1.style.textDecoration = "";
      li.style.textDecoration = "";
    }
  };
  let add = () => {
    let txtValue = [...val, []];
    setVal(txtValue);
  };
  let change = (onChangeVal, i) => {
    let txtData = [...val];
    txtData[i] = onChangeVal.target.value;
    setVal(txtData);
  };
  const del = (i) => {
    let delVal = [...val];
    delVal.splice(i, 1);
    setVal(delVal);
  };
  const line1 = (i) => {
    let lt = document.getElementById("styled" + i);
    let li = document.getElementById("li" + i);
    if (lt.style.textDecoration == "") {
      lt.style.textDecoration = "line-through";
      li.style.textDecoration = "line-through";
    } else {
      lt.style.textDecoration = "";
      li.style.textDecoration = "";
    }
  };
  const dele = () => {
    setValue("");
    let li1= document.getElementById("li");
    li1.innerText=place.empty;
    let tx = document.getElementById("task");
    tx.style.textDecoration = "";
  };
  const topictxt1 = (e) => {
    setValue1(e.target.value);
  };
  const change1 = (e) => {
    setValue(e.target.value);
    let li1= document.getElementById("li");
    li1.innerText=e.target.value;
  };

  const uc = () => {
    let ital = document.getElementById("task");
    let upper = document.getElementById("upper");
    let li = document.getElementById("li");
    if (ital.style.textTransform == "") {
      ital.style.textTransform = "uppercase";
      li.style.textTransform = "uppercase";
      upper.style.backgroundColor = "rgba(245, 243, 230, 0.99)";
    } else {
      ital.style.textTransform = "";
      li.style.textTransform = "";
      upper.style.backgroundColor = "inherit";
    }
  };
  const it = () => {
    let ital = document.getElementById("task");
    let ital1 = document.getElementById("Ital");
    let li = document.getElementById("li");
    if (ital.style.fontStyle == "") {
      ital.style.fontStyle = "italic";
      li.style.fontStyle = "italic";
      ital1.style.backgroundColor = "rgba(245, 243, 230, 0.99)";
    } else {
      ital.style.fontStyle = "";
      li.style.fontStyle = "";
      ital1.style.backgroundColor = "inherit";
    }
  };
  const im = () => {
    let ital = document.getElementById("task");
    let bl1 = document.getElementById("imp");
    let li = document.getElementById("li");
    if (ital.style.color == "") {
      ital.style.color = "crimson";
      li.style.color = "crimson";
      bl1.style.backgroundColor = "rgba(245, 243, 230, 0.99)";
    } else {
      ital.style.color = "";
      li.style.color = "";
      bl1.style.backgroundColor = "inherit";
    }
  };
  let generatePDF = () => {
    let input = document.getElementById("listPdf").innerHTML;
    // let inputContent= document.body.innerHTML;
    document.body.innerHTML = input;
    window.print();
    document.location.reload();
    // document.body.innerHTML=inputContent;
    // html2canvas(input).then((canvas)=>{
    //   const imgData= canvas.toDataURL('image/png');
    //   const pdf= new jsPDF();
    //   pdf.addImage(imgData,'JPEG',0,0);
    //   pdf.save(topictxt+'pdf');

    // })
    //   const doc= new jsPDF();
    //  var html= htmlToPdfmake(input.innerHTML);
    //  const docDefine ={
    //   content: html
    //  };
    //  pdfMake.vfs=pdfFonts.vfs;
    //  pdfMake.createPdf(docDefine).open();
  };
  //
  const uc1 = (i) => {
    let ital = document.getElementById("styled" + i);
    let upper = document.getElementById("upper" + i);
    let li = document.getElementById("li" + i);
    if (ital.style.textTransform == "") {
      ital.style.textTransform = "uppercase";
      li.style.textTransform = "uppercase";
      upper.style.backgroundColor = "rgba(245, 243, 230, 0.99)";
    } else {
      ital.style.textTransform = "";
      li.style.textTransform = "";
      upper.style.backgroundColor = "inherit";
    }
  };
  const it1 = (i) => {
    let ital = document.getElementById("styled" + i);
    let ital1 = document.getElementById("ital" + i);
    let li = document.getElementById("li" + i);
    if (ital.style.fontStyle == "") {
      ital.style.fontStyle = "italic";
      li.style.fontStyle = "italic";
      ital1.style.backgroundColor = "rgba(245, 243, 230, 0.99)";
    } else {
      ital.style.fontStyle = "";
      li.style.fontStyle = "";
      ital1.style.backgroundColor = "inherit";
    }
  };
  const im1 = (i) => {
    let ital = document.getElementById("styled" + i);
    let bl1 = document.getElementById("imp" + i);
    let li = document.getElementById("li" + i);
    if (ital.style.color == "") {
      ital.style.color = "crimson";
      li.style.color = "crimson";
      bl1.style.backgroundColor = "rgba(245, 243, 230, 0.99)";
    } else {
      ital.style.color = "";
      li.style.color = "";
      bl1.style.backgroundColor = "inherit";
    }
  };
  return (
    <div id="listBody" style={{color: place.mode==='dark'?'white':'black'}}>
      <input
      style={{backgroundColor: place.mode==='dark'? '#01172b': 'white',color: place.mode==='dark'?'white':'black'}}
        className="topic"
        type={text}
        value={topictxt}
        onChange={topictxt1}
        placeholder={place.topic}
      ></input>
      <p className="formfield">
        <span id="sp1">
          <button className="In" id="Ital" onClick={it}>
            Italic
          </button>
          <button id="imp" onClick={im} className="In">
            *Important
          </button>
          <button onClick={uc} id="upper" className="In">
            Upper Case
          </button>
        </span>
        <br></br>
        <button className="show" onClick={line}>
          ✔️
        </button>
        <TextareaAutosize
          // style={{
          //   textDecoration: active ? "line-through" : "",
            
          // }}
          style={{backgroundColor: place.mode==='dark'? '#01172b': 'white', color:place.mode=== 'dark'?'white': 'black'}}
          id="task"
          cols={50}
          onChange={change1}
          value={text}
          placeholder={place.hold}
        />
        <button onClick={dele} className="show">
          ❌
        </button>
        <small>Remove</small>
      </p>
      <div id="addList"></div>
      {val.map((data, i) => (
        <p className="formfield" key={i}>
          <span id={"sp" + i}>
            <button onClick={() => it1(i)} id={"ital" + i} className="In">
              Italic
            </button>
            <button onClick={() => im1(i)} id={"imp" + i} className="In">
              *Important
            </button>
            <button onClick={() => uc1(i)} id={"upper" + i} className="In">
              Upper Case
            </button>
          </span>
          <br></br>
          <button className="show" onClick={() => line1(i)}>
            ✔️
          </button>
          <TextareaAutosize
            value={data}
            onChange={(e) => change(e, i)}
            className="task-style"
            id={"styled" + i}
            style={{backgroundColor: place.mode==='dark'? '#01172b': 'white', color:place.mode=== 'dark'?'white': 'black'}}
            // style={{
            //   textDecoration : i == acti? 'line-through': ''
            // }}
            cols={50}
            placeholder={place.hold}
          />
          <button onClick={() => del(i)} className="show">
            ❌
          </button>
          <small>Remove</small>
        </p>
      ))}
      <button className="show" id="add" onClick={add}>
        +
      </button>
      <small>Add</small>
      <br></br>
      <hr></hr>
      <span className="h2">Preview </span>
      <button id="dl" onClick={generatePDF}>
        Download ⬇️
      </button>
      <br></br>
      <div id="listPdf" style={{color:place.mode=== 'dark'?'white': 'black'}}>
        <span className="topic">{topictxt}</span>
        <br></br>
        <ul>
          <li id="li">{place.empty}</li>
          {val.map((data, i) => (
            <li id={"li" + i} key={i}>
              {data}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

List.defaultProps = {
  hold: "Enter your Task here...",
  topic: "Enter the Topic of List here",
  empty: "List is Empty",
};
