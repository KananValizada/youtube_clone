import { Stack, Box } from "@mui/material";

import { VideoCard, ChannelCard } from "../components";

const Videos = ({ videos }) => {
  if (!videos) return;

  console.log(videos);
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) =>
        item.id.videoId || item.id.channelId ? (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        ) : null
      )}
    </Stack>
  );
};

export default Videos;
