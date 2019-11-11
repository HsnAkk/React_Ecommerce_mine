import React from 'react';
import styled from 'styled-components';


const Title = ({ title }) => {
    return (
  
        <div className="row mt-5 pt-5">
            <div className="col-10 mx-auto my-2 text-center">
                <Underlined>
                    {title}
                </Underlined>
            </div>
        </div>
      
      
    )
}

const Underlined = styled.h1`
   
	font-size: 36px;
	color: #454545;
	text-transform: uppercase;
	position: relative;
	padding-bottom: 20px;
	margin: 0 0 35px;
	font-weight:400;

    &::before {
	content: "";
	position: absolute;
	width: 140px;
	bottom: 0;
	left: 50%;
	margin-left: -70px;
	height: 1px;
	background: var(--mainYellow);
  }
    &::after {
	content: "";
	position: absolute;
	width: 24px;
	height: 24px;
	bottom: -11px;
	left: 50%;
	margin-left: -12px;
	border: 5px solid #fff;
	border-radius: 20px;
	background: var(--mainYellow);
  }
    


`;

export default Title;