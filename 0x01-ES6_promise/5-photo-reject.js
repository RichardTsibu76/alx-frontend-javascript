function uploadPhoto(filename) {
  return Promise.reject(new Error(
    `${filename} cannot be processed`,
  ));
}
//this is the export function
export default uploadPhoto;
