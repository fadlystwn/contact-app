const fetchApi = async (url: string, method: string, body?: any) => {
  try {
    const options: RequestInit = {
      method,
      headers: { "Content-Type": "application/json" }
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const result = await response.json();

    if (!result || typeof result.data === 'undefined') {
      throw new Error(`Invalid response structure. Expected { data: any }, but got ${JSON.stringify(result)}`);
    }

    return result.data;
  } catch (error) {
    console.error(`Error during API request to ${url}:`, error);
    throw error;
  }
};

export default fetchApi