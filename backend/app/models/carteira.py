from app import db
from ..auxiliar import AutoAttributes

class Carteira(db.Model,AutoAttributes):
    __tablename__ = 'carteira'
    
    id_carteira= db.Column(db.Integer, primary_key=True)

    movimentacao_carteira = db.relationship('Movimentacao', backref='movimentacao_carteira', lazy=True)

    attrs = ['id_carteira']