# Ref: https://www.fusionbox.com/blog/detail/create-react-app-and-django/624/
import os

# DOMAIN = "https://5e074be2eb26445a914418e1ed08e234.vfs.cloud9.us-east-1.amazonaws.com"


def dev_cors_middleware(get_response):
    """
    Adds CORS headers for local testing only to allow the frontend, which is served on
    localhost:3000, to access the API, which is served on localhost:8000.
    """
    def middleware(request):
        response = get_response(request)

        response['Access-Control-Allow-Origin'] = "*"
        # http://%s:%s" % (
        #     os.environ.get('PUBLIC_IP', 'localhost'),
        #     os.environ.get('PORT', '8000')
        # )
        response['Access-Control-Allow-Methods'] = 'GET, POST, PUT, PATCH, OPTIONS, DELETE, HEAD'
        response['Access-Control-Allow-Headers'] = 'Content-Type, X-CSRFToken'
        response['Access-Control-Allow-Credentials'] = 'true'
        return response
    return middleware
