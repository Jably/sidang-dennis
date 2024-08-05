const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    const imageName = item.replace('./', ''); // Get the image name without path
    images[imageName] = r(item); // Assign the imported image to its name
  });
  return images;
};

const images = importAll(require.context('../components/img', false, /\.(png|jpe?g|svg)$/));

export default images;
