import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useMxScrollbarStyles = makeStyles((theme) => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "8px",
      height: "8px",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 0.1px rgba(0,0,0,0.00)",
      width: "8px",
      height: "8px",
      backgroundColor: "transparent",
    },
    "*::-webkit-scrollbar-thumb": {
      [theme.breakpoints.up("sm")]: {
        backgroundColor: "#A87FF3",
        "&:hover": {
          backgroundColor: "#A87FF3",
        },
      },
      [theme.breakpoints.down("xs")]: {
        backgroundColor: "transparent",
      },
    },
  },
}));

export const MxScrollbar: React.FC = (props) => {
  const classes = useMxScrollbarStyles();
  return <div className={classes["@global"]}>{props.children}</div>;
};
