import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  GridList,
  GridListTile,
  Typography,
} from "@material-ui/core";

function Blog() {
  const useStyles = makeStyles((theme) => ({
    root: {
      padding: "80px",
    },
  }));

  const classes = useStyles();

  return (
    <div className="classes.root">
      <Typography variant="h3" color="primary" gutterBottom>
        Blog
      </Typography>
      <GridList cols={3} spacing={12}>
        <GridListTile cols="1">
          <Card>
            <CardHeader title="Vacation to Maui" />
            <CardActions>
              <Button size="small" color="primary" variant="outlined">
                Read more
              </Button>
            </CardActions>
          </Card>
        </GridListTile>
      </GridList>
    </div>
  );
}

export default Blog;
