import unittest

from django.test import Client


class HomepageTest(unittest.TestCase):

    def test_success(self):
        client = Client()

        response = client.get('/')

        self.assertEqual(response.status_code, 200)
