from app import db
from ..auxiliar import AutoAttributes

class Usuario(db.Model,AutoAttributes):
    __tablename__ = 'usuario'
    
    id_usuario =  db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.Text)

    attrs = ['id_usuario','nome']