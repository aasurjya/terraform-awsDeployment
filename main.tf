provider "aws" {
  region = "us-east-1"  # Replace with your desired AWS region
}

resource "aws_lambda_function" "frontend_lambda" {
  function_name = "frontend-lambda"
  runtime = "nodejs14.x"  # Replace with the appropriate runtime for your application
  handler = "index.handler"  # Replace with the correct handler for your application
  role = aws_iam_role.lambda_role.arn
  timeout = 30  # Replace with the desired timeout value
  memory_size = 128  # Replace with the desired memory size
  
  // Replace with your frontend application code
  // The code must be zipped and stored in an S3 bucket for Lambda deployment
  // You can use the "aws_lambda_function" resource's "filename" attribute to specify the S3 location of your code
  filename = "s3://your-bucket-name/frontend-lambda.zip"
  
  // Other configuration options for your Lambda function
  // ...
}

resource "aws_iam_role" "lambda_role" {
  name = "frontend-lambda-role"
  
  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "",
      "Effect": "Allow",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF
}

resource "aws_s3_bucket" "frontend_bucket" {
  bucket = "your-bucket-name"
  acl    = "private"

}

resource "aws_s3_bucket_object" "frontend_code" {
  bucket       = aws_s3_bucket.frontend_bucket.id
  key          = "frontend-lambda.zip"
  source       = "path/to/frontend-lambda.zip"  # Replace with the path to your frontend code ZIP file
  content_type = "application/zip"
}

data "aws_s3_bucket_object" "frontend_code_metadata" {
  bucket = aws_s3_bucket.frontend_bucket.id
  key    = aws_s3_bucket_object.frontend_code.key
}

resource "aws_lambda_function" "frontend_lambda" {
  function_name = "frontend-lambda"
  runtime       = "nodejs14.x"
  handler       = "index.handler"
  role          = aws_iam_role.lambda_role.arn
  timeout       = 30
  memory_size   = 128
  filename      = aws_s3_bucket_object.frontend_code.id
  source_code_hash = data.aws_s3_bucket_object.frontend_code_metadata.etag
}
