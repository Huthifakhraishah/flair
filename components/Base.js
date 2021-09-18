import React from "react";
import PlanCard from "../components/PlanCard";
const Base = (props) => {
    const {plan}=props
  return (
    <div>
      {
        <div className="maintwo">
          {(plan).map((value) => {
            return (
              <>
                <PlanCard
                  paymentType={value.plan}
                  euros={value.euro}
                  time={"month"}
                />
              </>
            );
          })}
        </div>
      }
    </div>
  );
};

export default Base;
