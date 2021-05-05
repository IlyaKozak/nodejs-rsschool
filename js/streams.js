pipeline(
  input_stream,
  transform_stream,
  output_stream
)
.then((success) => console.log('success'), (error) => console.log('error'));