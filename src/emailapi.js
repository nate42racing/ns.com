const EmailSubmit = async (event, email) => {
  
    const payload = {
      // Include any form data you want to send to the Lambda function
        'email': email,
        'contact': 'asda'
    };
  
    try {
      const response = await fetch('https://jbsofbhque.execute-api.us-east-1.amazonaws.com/prod/email', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(await response.json())
      console.log('Email sent');
    } catch (err) {
      console.log('Error sending email: ', err);
    }
  };

export default EmailSubmit;