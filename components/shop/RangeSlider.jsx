"use client";
import React, { useState, useEffect } from 'react';

export default function RangeSlider({ 
  min = 0, 
  max = 10000, 
  step = 50, 
  values = [0, 10000], 
  onChange 
}) {
  const [minVal, setMinVal] = useState(values[0]);
  const [maxVal, setMaxVal] = useState(values[1]);

  useEffect(() => {
    setMinVal(values[0]);
    setMaxVal(values[1]);
  }, [values]);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxVal - step);
    setMinVal(value);
    onChange([value, maxVal]);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minVal + step);
    setMaxVal(value);
    onChange([minVal, value]);
  };

  return (
    <div className="range-slider">
      <div className="range-slider-container">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minVal}
          onChange={handleMinChange}
          className="range-slider-input range-min"
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxVal}
          onChange={handleMaxChange}
          className="range-slider-input range-max"
        />
      </div>
      <style jsx>{`
        .range-slider {
          position: relative;
          height: 40px;
          margin: 20px 0;
        }
        
        .range-slider-container {
          position: relative;
          height: 6px;
        }
        
        .range-slider-input {
          position: absolute;
          width: 100%;
          height: 6px;
          background: none;
          pointer-events: none;
          -webkit-appearance: none;
          appearance: none;
          outline: none;
        }
        
        .range-slider-input::-webkit-slider-track {
          width: 100%;
          height: 6px;
          background: #ddd;
          border-radius: 3px;
        }
        
        .range-slider-input::-webkit-slider-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #000;
          border: 2px solid #fff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          cursor: pointer;
          pointer-events: auto;
          -webkit-appearance: none;
          appearance: none;
        }
        
        .range-slider-input::-moz-range-track {
          width: 100%;
          height: 6px;
          background: #ddd;
          border-radius: 3px;
          border: none;
        }
        
        .range-slider-input::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #000;
          border: 2px solid #fff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          cursor: pointer;
          pointer-events: auto;
          border: none;
        }
        
        .range-min {
          z-index: 1;
        }
        
        .range-max {
          z-index: 2;
        }
      `}</style>
    </div>
  );
}