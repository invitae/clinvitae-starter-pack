# Clinvitae Starter Pack

This provides a launch pad for the Clinvitae coding assignment. It features a
Django server, a React client, and a single feature: returning a table of all
variants given a valid gene symbol. From here, you can implement any number of
additional features.


## Getting Started

First, create a Python 3 virtual environment for the Django server. Using
[virtualenvwrapper](https://virtualenvwrapper.readthedocs.io), this would be
something like:

    mkvirtualenv clinvitae --python=`which python3`

If necessary, activate your virtual environment. Then install the Python
requirements:

    workon clinvitae  # If necessary
    pip install -r requirements.txt

Run the database migrations. (This project doesn't really store anything in the
database, except for Django stuff like sessions which are stored with SQLite.)

    python manage.py migrate

You'll also need to install the JavaScript dependencies and build the React
client.

    npm install
    npm run build

Note: there's also a `npm run build:watch` mode provided for development, which
will watch the JavaScript source files and automatically rebuild whenever they
change.

Finally, run the Django development server, which provides an API and serves
the JavaScript bundle for the client.

    python manage.py runserver

You can then check out Clinvitae at http://localhost:8000


## Running Tests

To run the back end Python tests:

    python manage.py test

To run the front end JavaScript tests:

    npm test

You can also use `npm run test:watch` to have the test runner watch for changes
and automatically run the test suite when anything changes.


## Repository Layout

The back end code lives in three directories:

- **clinvitae/** the Django project for Clinvitae
- **variants/** a Django app for working with gene variants
- **tests/** tests for the Python code

The front end code lives in a single directory:

- **src/** the React client, tests live alongside source code

On build, the JS bundle goes into the **dist/** directory, ignored by version
control.
