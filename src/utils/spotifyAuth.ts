const getSpotifyToken = async () => {
  const clientId = "863ebd6e84964bc2ac4ce02c3175de76";
  const clientSecret = "fb0ca060103843da8f2e2604bf2f3570";

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
        Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body:"grant_type=client_credentials"
  });
  const data = await response.json()
  return data.access_token
};
export default getSpotifyToken;