import os

from flask import Flask, request, redirect, render_template, url_for
#from werkzeug.wrappers import Request, Response

from flask_cors import CORS

from werkzeug.utils import secure_filename

UPLOAD_FOLDER = 'D:/workspace/upload/target_file'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = 'mysecret'

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@app.route('/upload')
def upload_file():
   return '''
    <html>
       <body>
          <form action = "http://127.0.0.1:5000/uploader" method = "POST" 
         enctype = "multipart/form-data">
         <input type = "file" name = "file" />
         <input type = "submit"/>
          </form>
       </body>
    </html>
    '''

@app.route('/uploader', methods = ['GET', 'POST'])
def uploader_file():
   if request.method == 'POST':
      f = request.files['file']
      filename = secure_filename(f.filename)
      f.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
      return 'file uploaded successfully'

if __name__ == '__main__':
    from werkzeug.serving import run_simple
    run_simple('localhost', 5000, app)
    
