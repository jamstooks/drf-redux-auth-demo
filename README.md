# drf-redux-auth-demo

[See the demo](https://drf-redux-auth-demo.herokuapp.com/)
(on a free Heroku instance... initial load might be slow)

This is an integrated demo site for [drf-redux-auth](https://github.com/jamstooks/drf-redux-auth).

This app is just a basic
[django rest framework](http://www.django-rest-framework.org/)
setup to serve a vanilla
[create-react-app](https://github.com/facebook/create-react-app) that extends
[drf-redux-auth](https://github.com/jamstooks/drf-redux-auth).

For full documentation, refer to the [drf-redux-auth](https://github.com/jamstooks/drf-redux-auth)
documentation.

This also relies on an environment variable, `REACT_APP_AUTH_URL`
for the DRF URL for now.
