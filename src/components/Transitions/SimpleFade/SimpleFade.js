import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fade, FormControlLabel, Paper, Switch } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  container: {
    display: "flex",
  },
  paper: {
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

export default function SimpleFade() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className={classes.root}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <div className={classes.container}>
        <Fade in={checked}>
          <Paper elevation={4} className={classes.paper}>
            <svg className={classes.svg}>
              <polygon
                points="0,100 50,00, 100,100"
                className={classes.polygon}
              />
            </svg>
          </Paper>
        </Fade>
      </div>
    </div>
  );
}
