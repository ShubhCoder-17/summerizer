async function getSummary() {
    const text = document.getElementById('text').ariaValueMax;
    console.log('text')

    const requestBody ={
        text: text.toString(),
        min_length: 100,
        max_length: 300,
    };
    };

    try{
        const response = await fetch('https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-text/' , {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                
            }
        }
    }
}