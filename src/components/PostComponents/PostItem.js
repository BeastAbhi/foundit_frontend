import { Box, Card, CardMedia, Typography } from "@mui/material";
import React from "react";

function PostItem(props) {
  const { post, changeVisibality } = props;
  return (
    <>
      <div
        className="col-md-3 my-3 overflow-hidden w-25 cardHover"
        onClick={() => {
          changeVisibality(post);
        }}
        style={{minWidth:"300px"}}
      >
        <Card
          variant="outlined"
          sx={{
            p: 2,
            display: "flex",
            zIndex: 1,
          }}
        >
          <CardMedia
            component="img"
            width="100"
            height="100"
            src={post.image}
            sx={{
              borderRadius: "6px",
              width: { xs: "100%", sm: 100 },
            }}
          />
          <Box sx={{ alignSelf: "center", ml: 2 }}>
            <Typography fontWeight="bold" noWrap gutterBottom>
              {post.itemName}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight="regular"
            >
              Collect from: 
              {post.collectFrom}
            </Typography>
          </Box>
        </Card>
      </div>
    </>
  );
}

export default PostItem;
