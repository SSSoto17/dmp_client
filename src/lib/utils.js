// FORMATTING

export function formatDuration(ms) {
  const date = new Date(ms);

  const min = `${date.getMinutes()}`.padStart(2, "0");
  const sec = `${date.getSeconds()}`.padStart(2, "0");
  return `${min}:${sec}`;
}

export function setExpiration(days, hours) {
  const minutes = 60 * 60 * 1000;
  return new Date(Date.now() + days * hours * minutes);
}

export function formatTrackProgress(duration, position) {
  return Math.round((position / duration) * 100);
}

// GENERATORS

export function genBase64(id, secret) {
  const credentials = `${id}:${secret}`;
  const encoded = new Buffer.from(credentials).toString("base64");

  return `Basic ${encoded}`;
}

export function generateRandomString(length) {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
