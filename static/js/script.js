document.getElementById('fetchData').addEventListener('click', async () => {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Loading...';
    
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        
        resultDiv.innerHTML = `
            <h3>Server Response:</h3>
            <p><strong>Message:</strong> ${data.message}</p>
            <p><strong>Environment:</strong> ${data.environment}</p>
            <p><strong>Server:</strong> ${data.server}</p>
        `;
    } catch (error) {
        resultDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
});