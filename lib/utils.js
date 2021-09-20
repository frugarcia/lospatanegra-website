export function goToBlankLink(link) {
  window.open(link, "_blank");
  return;
}

export function absoluteUrl(req, setLocalhost) {
  let protocol = "https:";
  let host = req ? req.headers.host : window.location.hostname;
  if (host.indexOf("localhost") > -1) {
    if (setLocalhost) host = setLocalhost;
    protocol = "http:";
  }
  return {
    protocol,
    host,
  };
}
