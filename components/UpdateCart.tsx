import React, { useRef, useEffect, useState } from "react";


import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";


const UpdateCart = () => {
  const [rec, setRec] = useState([]);

   const videoElement = useRef(null);
  const startBtn = useRef(null);
  const stopBtn = useRef(null);

  const willRec = useRef(false);
  const model = useRef(null);
  const recnow = useRef(false);
  const recorderRef = useRef(null);

  return (
    <div className="container-fluid">

 
          <video autoPlay playsInline muted ref={videoElement} />
       


              <div className="btn-group mr-2" role="group">
                <button
                  className="btn btn-success"
                  onClick={() => {
                    shouldRecordRef.current = true;
                    stopButtonElement.current.removeAttribute("disabled");
                    startButtonElement.current.setAttribute("disabled", true);
                    detectFrame();
                  }}
                  ref={startButtonElement}
                >
                  Start
            </button>
              </div>
              <div className="btn-group mr-2" role="group">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    shouldRecordRef.current = false;
                    startButtonElement.current.removeAttribute("disabled");
                    stopButtonElement.current.setAttribute("disabled", true);
                    stopRecording();
                  }}
                  ref={stopButtonElement}
                >
                  Stop
            </button>
              </div>
       
            <div className="row p-3">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Records Time</th>
                  </tr>
                </thead>
                <tbody>
                  {!records.length
                    ? <tr>
                      <td>No record yet</td>
                    </tr>
                    : records.map(record => {
                      return (
                        <tr>
                          <td> <a href={record.href}>{moment(record.title).format('LLLL')}</a></td>
                        </tr>
                      );
                    })}

                </tbody>
              </table>

            </div>
      
   
      
    </div>
  );
}


export default UpdateCart