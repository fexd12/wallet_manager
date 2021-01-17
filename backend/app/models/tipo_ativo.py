from app import db
from ..auxiliar import AutoAttributes

class TipoAtivo(db.Model,AutoAttributes):
    __tablename__ = 'tipo_ativo'

    id_tipo_ativo = db.Column(db.Integer,primary_key=True)
    nome = db.Column(db.Text)

    ativo_tipo_ativo = db.relationship('Ativo', backref='ativo_tipo_ativo', lazy=True)

    
    attrs = ['id_tipo_ativo','nome']