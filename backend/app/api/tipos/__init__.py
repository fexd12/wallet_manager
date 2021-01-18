from flask import Blueprint

bp = Blueprint('tipos',__name__)

from . import routes
