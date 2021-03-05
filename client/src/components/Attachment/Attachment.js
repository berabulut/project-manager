import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { LightButton } from "components";
import { attachmentStyles } from "./styles";

const Attachment = ({ image, file, date, title }) => {
  const classes = attachmentStyles();

  return (
    <Grid container>
      <Grid item style={{ width: "100px" }}>
        {image ? (
          <img
            className={classes.image}
            src={`${image.src}&w=360&q=80`}
            alt={image.alt}
          />
        ) : (
          file && (
            <div className={classes.filePlaceholder}>
              <Typography className={classes.text}>{file.text}</Typography>
            </div>
          )
        )}
      </Grid>
      <Grid item xs={9} style={{ paddingLeft: "16px" }}>
        <Grid item xs={12}>
          <Typography className={classes.date}>Added {date}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.title}>{title}</Typography>
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={3}>
            <LightButton text="Download" />
          </Grid>
		  <Grid item xs={3} style={{marginLeft: "8px"}}>
            <LightButton text="Delete" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Attachment;
