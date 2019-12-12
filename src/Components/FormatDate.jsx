import React from "react";
import moment from "moment";

const FormatDate = ({ date, rule = "DD-MM-YYYY" }) => (
  <span className="date">{moment(date).format(rule)}</span>
);
export default FormatDate;
