const API_KEY = "pub_aa9ff33d7bb2403fa76477bd3773c52e";

export async function fetchLatestNews(country) {
  try {
    const res = await fetch(
      `https://newsdata.io/api/1/latest?apikey=${API_KEY}&q=${country}`
    );
    const data = await res.json();

    // API may return error instead of results
    return data.results || [];
  } catch (err) {
    console.error("Error fetching news:", err);
    return [];
  }
}
