export const sendRequest = async options => {
  const headers = {
    'Accept': 'application/json',
    'Authorization': `Basic ${btoa(`apikey:${process.env.API_KEY}`)}`,
    'Content-Type': 'application/json'
  };

  const response = await fetch(`https://us19.api.mailchimp.com/3.0/lists/${process.env.LIST_ID}/members`, {
    mode: 'no-cors',
    method: 'POST',
    credentials: 'include',
    ...headers,
    ...options,
  });

  const data = await response.json();

  console.log('data', data);

  if (data.error) {
    throw new Error(data.error);
  }

  return data;
}