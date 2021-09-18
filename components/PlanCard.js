import React, { useState } from "react";
import Button from "./Button";
import Header from "./Header";
import Info from "./Info";

import List from "./List";
const PlanCard = (props) => {
  const [isHovered, setIsHoverd] = useState("card");
  const { paymentType, euros, time } = props;
  const esService = ["Core HR", "Payroll", "Recruting", "Employee"];
  const grService = ["Preformance management", "Shift planning"];
  const prService = [
    "Preformance management",
    "Shift planning",
    "Integrations",
    "Comensation managemnt",
  ];

  return (
    <div>
      <div
        className={isHovered}
        onMouseEnter={() => setIsHoverd("cardborder")}
        onMouseLeave={() => setIsHoverd("card")}
      >
        <Header paymentType={paymentType} euros={euros} time={time} />
        {paymentType === "Essential" || paymentType === "Super Essential" ? (
            <ul className="list">
                <List service={esService} />
            </ul>
            ) : paymentType === "Growth" || paymentType === "Super Growth" ? (
          <div>
            <ul className="list">
                <List service={esService} />
                <List service={grService} />
            </ul>
          </div>
        ) : (
          <ul className="list">
                <List service={esService} />
                <List service={prService} />
          </ul>
        )}
        <Button />
      </div>
    </div>
  );
};

export default PlanCard;
