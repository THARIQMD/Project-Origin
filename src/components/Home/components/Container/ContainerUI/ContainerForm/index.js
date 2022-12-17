import React, { useEffect, useState } from "react";
import { Months } from "../../../../constant";
import styles from "./styles.module.css";
import { NumericFormat } from "react-number-format";

export const ContainerForm = () => {
  const [amount, setAmount] = useState(0);
  const [reachDate, setReachDate] = useState(0);
  const [monthlyamt, setMonthlyAmt] = useState(0);

  useEffect(() => {
    if (amount) {
      const division = amount / reachDate;
      console.log(division, "division");
      setMonthlyAmt(division);
    }
  });

  const handleAnswerChange = () => {
    alert("The sky is your starting point!");
  };

  console.log(amount, "amount");
  console.log(monthlyamt, "monthly");
  console.log(reachDate, "reachDate");

  return (
    <div>
      <form className={styles.flex}>
        <div className={styles.col}>
          <label for="totalamut">Total amount</label>
          <input
            type="number"
            className={styles.totalamut}
            id="totalamut"
            name="amount"
            pattern="[0-9]+"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </div>
        <div className={styles.col}>
          {" "}
          <label for="due">Reach goal by</label>
          <div
            className={styles.due}
            style={{ position: "relative", padding: "16p 50px" }}
          >
            <span
              style={{
                color: "#8A9CA9",
                position: "absolute",
                left: "20px",
                top: "17px",
                cursor: "pointer",
                fontSize: "20px",
              }}
              className="material-icons"
              onClick={() => reachDate != 0 && setReachDate(reachDate - 1)}
            >
              arrow_back_ios
            </span>
            {Months?.map((i, index) => {
              return (
                reachDate === index && (
                  <p
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      fontFamily: "Work Sans",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "16px",
                      margin: 0,
                      lineHeight: "150%",
                      textAlign: "center",
                      color: "#1E2A32",
                    }}
                    onKeyUp={handleAnswerChange}
                  >
                    {i?.monthname}
                    {""}
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        fontFamily: "Work Sans",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "16px",
                        margin: 0,
                        lineHeight: "150%",
                        textAlign: "center",
                        color: "#8A9CA9",
                      }}
                    >
                      {i?.year}
                    </span>
                  </p>
                )
              );
            })}
            <span
              style={{
                color: "#8A9CA9",
                position: "absolute",
                top: "17px",
                cursor: "pointer",
                right: "17px",
                fontSize: "20px",
              }}
              className="material-icons"
              onClick={() =>
                reachDate < Months.length - 1 && setReachDate(reachDate + 1)
              }
            >
              arrow_forward_ios
            </span>
          </div>
          {reachDate === 0 && (
            <p className={styles.error}>Select Future Month</p>
          )}
        </div>
      </form>

      <div className={styles.containerTotal}>
        <div className={styles.sub}>
          <h4>Monthly amount</h4>
          {reachDate !== 0 ? (
            <NumericFormat
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
              value={monthlyamt.toFixed(2)}
            />
          ) : (
            <span>$0</span>
          )}
        </div>
        <div className={styles.info}>
          <p>
            You’re planning{" "}
            <span className={styles.highlight}>
              {reachDate} monthly deposits
            </span>{" "}
            to reach your
            <span className={styles.highlight}> ${amount} </span>goal by{" "}
            {Months.map((i, index) => {
              return (
                reachDate === index && (
                  <span className={styles.highlight}>
                    {i?.monthname} {i?.year}
                  </span>
                )
              );
            })}
          </p>
        </div>
      </div>
      <div className={styles.btnflex}>
        <a
          className={styles.button}
          href="/"
          style={{ textDecoration: "none" }}
        >
          Confirm
        </a>
      </div>
    </div>
  );
};
