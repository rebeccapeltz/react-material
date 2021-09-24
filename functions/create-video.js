exports.handler = async (event, context) => {
  const manifest = JSON.parse(event.body).manifest;

  console.log(manifest)
  return {
    statusCode: 200,
    body: JSON.stringify({
      manifest: manifest
    }),
  };
  
};
