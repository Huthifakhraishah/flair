import React,{useState} from 'react';
import PlanCard from '../components/PlanCard';
import { Link } from '@reach/router';
export default function Home() {
  const [clickOn, setOnClick] = useState(true);
  const basePlansM=[
    {plan:"Essential",euro:"8"},
    {plan:"Growth",euro:"14"},
    {plan:"Preformance",euro:"20"},
  ]
  const basePlansY=[
    {plan:"Super Essential",euro:"50"},
    {plan:"Super Growth",euro:"100"},
    {plan:"Super Preformance",euro:"160"},
  ]
  return (
    <div className="main">
      <h2 className="back">Base plans</h2>
    { clickOn ? 
          <>
          <div className="anchor">
            <a  className="monthly" onClick={() => setOnClick(true)}>Monthly
            </a>
          <span className="dash"></span>
          <a  className="yearly" onClick={() => setOnClick(false)}> Yearly
          </a> 
          </div> 
          {<div className="maintwo">
            {
                    basePlansM.map((value) => {
                        return (
                        <>
                    <PlanCard  paymentType={value.plan} euros={value.euro} time={"month"}/>
                  </>
                  )
              }
              )
          }
          
          </div>}
          </>
          :
          <>
          <div className="anchor">
          <a  className="yearly" onClick={() => setOnClick(true)}>Monthly
          </a>
        <span className="dash"></span>
        <a  className="monthly" onClick={() => setIsClicked(false)}> Yearly
        </a> 
        </div>
        {<div className="maintwo">
            {
                    basePlansY.map((value) => {
                        return (
                        <>
                    <PlanCard  paymentType={value.plan} euros={value.euro} time={"year"}/>
                  </>
                  )
              }
              )
          }
          
          </div>}
          </>
          }
    </div>
    )
}
