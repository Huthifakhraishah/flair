    import React, { useState } from "react";
    import Button from "./Button";
import Header from "./Header";
    import Info from "./Info";
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
            <Header paymentType={paymentType} euros={euros} time={time}/>
            {paymentType === "Essential" || paymentType === "Super Essential" ? (
            <ul className="list">
                {esService.map((value) => {
                return (
                    <>
                    <Info
                    className="mark exclamation-point end"
                    value={value}
                    />
                    </>
                );
                })}
            </ul>
            ) : paymentType === "Growth" || paymentType === "Super Growth" ? (
            <div>
                <ul className="list">
                {esService.map((value) => {
                    return (
                    <>
                        <Info
                        className="mark exclamation-point end"
                        value={value}
                        />
                    </>
                    );
                })}
                {grService.map((value) => {
                    return (
                    <>
                        <Info
                        className="mark exclamation-point end"
                        value={value}
                        />
                    </>
                    );
                })}
                </ul>
            </div>
            ) : (
            <ul className="list">
                {esService.map((value) => {
                return (
                    <>
                    <Info className="mark exclamation-point end" value={value} />
                    </>
                );
                })}
                {prService.map((value) => {
                return (
                    <>
                    <Info className="mark exclamation-point end" value={value} />
                    </>
                );
                })}
            </ul>
            )}
            <Button/>
        </div>
        </div>
    );
    };

    export default PlanCard;
