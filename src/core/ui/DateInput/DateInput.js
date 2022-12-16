import React, { forwardRef } from "react";  

// Styles DatePicker
import "react-datepicker/dist/react-datepicker.css";  

// Components
import { Btn } from "../Btn";
import { SvgSprite } from "../SvgSprite/SvgSprite";
import DatePicker from "react-datepicker"; 

// CSS Modules, react-datepicker-cssmodules.css  
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';  
  
export const DateInput = ({className, setStartDate, startDate}) => {
  
    const CustomInput = forwardRef(({ onClick }, ref) => (
        <Btn 
            onClick={onClick} 
            innerRef={ref} 
            className={className}
        > Date <SvgSprite spriteID={'arrow'} />
        </Btn>
    ));
    
    return (
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={<CustomInput />}
      />
    );
  };