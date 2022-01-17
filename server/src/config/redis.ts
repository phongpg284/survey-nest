export const options = {
  url: 'redis://redis:6379',
  onClientReady: (client) => {
    client.on('error', (err) => {
      console.log(err);
    });
  },
};
