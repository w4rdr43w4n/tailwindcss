import requests

options = {
  # The ID of the template that you created in the template editor.
  # Read more: https://creatomate.com/template-editor
  'template_id': '9ccba48c-2e74-4e98-816d-fe0db2705c78',

  # Modifications that you want to apply to the template.
  # Read more: https://creatomate.com/docs/api/rest-api/the-modifications-object
  'modifications': {
    'Title': 'This text is placed in your video',
    'Title.fill_color': '#4980f1',
    'Value': '50%',
  },
}

source = {
  'output_format': 'mp4',
  'emoji_style': 'apple', # Choose between 'facebook', 'google', 'twitter' and 'apple'

  'elements': [
    {
      'type': 'video',
      'source': 'https://creatomate-static.s3.amazonaws.com/demo/video4.mp4',
    },
    {
      'type': 'text',
      'text': 'This text adjusts automatically to the size of the video. 🔥',
      'y': '75%',
      'width': '100%',
      'height': '50%',
      'x_padding': '5 vw',
      'y_padding': '5 vh',
      'y_alignment': '100%',
      'font_family': 'Open Sans',
      'font_weight': 700,
      'font_size_maximum': '10.4 vmin',
      'background_color': 'rgba(255,255,255,0.69)',
      'background_x_padding': '23%',
      'background_y_padding': '8%',
      'background_align_threshold': '0%',
      'fill_color': '#333333',
      'animations': [{
        'type': 'text-slide',
        'duration': 2,
        'easing': 'quadratic-out',
        'split': 'line',
        'scope': 'element',
        'background_effect': 'scaling-clip',
      }],
    },
  ],
} 

API_KEY = "096f4385900c433f964c5b364ca2e9997cc37d4c7e04e708a9b9c96fea9c79c1f9444d5cf2319a838af197578d8a813c"
response = requests.post(
  'https://api.creatomate.com/v1/renders',
  headers={
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json',
  },
    json={'source': source}
)
print(response)