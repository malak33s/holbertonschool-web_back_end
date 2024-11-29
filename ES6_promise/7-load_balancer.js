export default function loadBalancer(chinaDownload, USDownload) {
  // ça retunr the first promise that resolves
  return Promise.race([chinaDownload, USDownload]);
 }
