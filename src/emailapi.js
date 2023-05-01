const EmailSubmit = async (email) => {
    let data = {
        'email': '',
        'name': '',
        'message': '',
    };

    for (const key in email) {
        if (data.hasOwnProperty(key)) {
            data[key] = email[key];
        }
    }
  
    const payload = data;
    try {
      const response = await fetch('https://jbsofbhque.execute-api.us-east-1.amazonaws.com/prod/email', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json',
        }
      });
      console.log(await response.json())
      console.log('Email sent');
    } catch (err) {
      console.log('Error sending email: ', err);
    }
  };

export default EmailSubmit;