const AWS = require('aws-sdk');
require('dotenv/config')
const uploadFileToS3 = async (data) => {
    // Configure AWS S3
const s3 = new AWS.S3({
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey
  });
   // Upload call details as a text file to S3
  const params = {
    Bucket: 'twilio-testing-ku',
    Key: `${process.env.CALL_SID}.txt`,
    Body: data
  };
  s3.upload(params, (err, data) => {
    if (err) {
      console.error('Error uploading to S3:', err);
    } else {
      console.log('File uploaded to S3:', data.Location);
    }
  });
    
  };
  
  module.exports = {
    uploadFileToS3,
  };
  