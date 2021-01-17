from setuptools import setup,find_packages

setup(
    name='wallet_manager',
    version='1.0',
    long_description=__doc__,
    packages=find_packages(),
    include_package_data=True,
    zip_safe=False,
    install_requires=['Flask','python-dotenv','psycopg2-binary','flask-sqlalchemy','Flask-Migrate','flask-cors']
)