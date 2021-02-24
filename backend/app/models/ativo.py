from app import db
from ..auxiliar import AutoAttributes

class Ativo(db.Model,AutoAttributes):
    __tablename__ = 'ativo'
    
    id_ativo = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.Text)
    ticker = db.Column(db.Text,unique=True)

    tipo_ativo_id = db.Column(db.Integer, db.ForeignKey('tipo_ativo.id_tipo_ativo'))

    movimentacao_ativo = db.relationship('Movimentacao', backref='movimentacao_ativo', lazy=True)
    
    attrs = ['id_ativo','nome','ticker','tipo_ativo_id']