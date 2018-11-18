import React from 'react';
import "./Time.css";

const Time = ({ms}) => { // valeur passe comme propse au Time mettez le dans variable ms
    const msPerSec= 1000
    const msPerMin= msPerSec * 60
    const msPerHour =msPerMin * 60
    const Hours =(Math.floor(ms / msPerHour)<10 ? '0'+Math.floor(ms / msPerHour) : Math.floor(ms / msPerHour))
    const restHours =ms % msPerHour;
    const minutes = (Math.floor(restHours / msPerMin)<10 ?'0'+Math.floor(restHours / msPerMin) :Math.floor(restHours / msPerMin));
    const restMin= restHours % msPerMin;
    const second = (Math.floor(restMin / msPerSec)<10 ? '0'+ Math.floor(restMin / msPerSec) : Math.floor(restMin / msPerSec))
    

     
      return (
        <div className="container">
      <div className="h">
        <span className="s1">{Hours}:</span>
        <span className="s2 ">Hour</span>
      </div>
      <div className="m">
        <span className="s1">{minutes}:</span>
        <span className="s2">Minute</span>
      </div>
      <div className="s">
        <span className="s1">{second}</span>
        <span className="s2">Second</span>
      </div>
    </div>
      );
    
  }

export default Time;