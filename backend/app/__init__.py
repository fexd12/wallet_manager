from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config import Config
from flask_cors import CORS,cross_origin

db = SQLAlchemy()
migrate = Migrate()
cors = CORS()

def create_app(config_class = Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    # app.redis = Redis.from_url(app.config['REDIS_URL'])
    # app.task_queue = rq.Queue('pi_task',connection=app.redis)

    cors.init_app(app)
    db.init_app(app)
    migrate.init_app(app,db)

    #rotas api

    from app.api.ativos import bp as ativos_bp
    app.register_blueprint(ativos_bp,url_prefix='/ativos')

    return app

import app.models
