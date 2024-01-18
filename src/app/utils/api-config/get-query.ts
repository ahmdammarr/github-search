type GET_QUERY_PARAMS = {
  url: string;
  query: string;
  variables?: Record<string, unknown>;
};

export async function getQuery({
  url,
  query,
  variables = {},
}: GET_QUERY_PARAMS) {
  const requestBody = {
    query: `${query}`,
    variables,
  };
  const headers = {
    "content-type": "application/json",
    Authorization: `Bearer ${process.env.access_token}`,
  };
  try {
    const res = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(requestBody),
    });

    return res.json();
  } catch (e) {
    throw new Error(`${e}`);
  }
}
