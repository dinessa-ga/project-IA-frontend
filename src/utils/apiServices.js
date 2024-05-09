
// Para LinkPage.js

export async function sendLink(url) {
    const response = await fetch('https://project-ai-422604.ue.r.appspot.com/api/scan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }), 
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    return await response.json();
  }
  

export async function fetchTechnologies() {
    const response = await fetch('api-url');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }

  
  
  export async function submitTechnologies(selectedTechnologies) {
    const response = await fetch('api-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(selectedTechnologies),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }
  