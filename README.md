## Link to use: https://tinyurl.com/m7u7t5pf

# qr_code_generator
Simple and effective QR code generator deployed on AWS

<img width="760" alt="Front" src="https://github.com/user-attachments/assets/df1a91cd-bedd-4532-8df9-a26772011814" />

## How does it work?
1. The user is presented with a form where they can submit a URL. HTML form validation then validates the URL is of the form "https://".

2. The webscript then sends a "GET" request to an AWS Lambda function.

3. The lambda function uses the qrcode library to generate the QR code and stores it in a S3 bucket using the boto3 library.

4. The object link is then returned to the user client and a display box is used to display the generated image with an option to download.
