    import React from "react";

    const Header = (props) => {
        const {paymentType,euros,time}=props
    return (
        <div>
        <h1>{paymentType}</h1>
        <p className="paraghraph">
            Understand the true pulse of your organization with regular Check-ins
            and guided 1-on-1s, and show meaningful appreciation when it matters
            most using High Fives.
        </p>
        <div className="eurospermonth">
            <div>
            <p className="euro">
                {euros}
                <span>&#8364;</span>
                <span className="dashTwo"></span>
            </p>
            </div>
            <div className="permonth">
            <p>
                per {time} <br />
                per employee
            </p>
            </div>
        </div>
        <hr />
        </div>
    );
    };

    export default Header;
