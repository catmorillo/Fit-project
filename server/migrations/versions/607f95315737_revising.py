"""revising

Revision ID: 607f95315737
Revises: d8c48250e72c
Create Date: 2023-05-01 15:44:00.260763

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '607f95315737'
down_revision = 'd8c48250e72c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('fitness_programs',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.Column('bulking', sa.String(), nullable=True),
    sa.Column('cutting', sa.String(), nullable=True),
    sa.Column('strong_lean_build', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(), nullable=True),
    sa.Column('_password_hash', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user_fitness_programs',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('fitness_program_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['fitness_program_id'], ['fitness_programs.id'], name=op.f('fk_user_fitness_programs_fitness_program_id_fitness_programs')),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_user_fitness_programs_user_id_users')),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user_fitness_programs')
    op.drop_table('users')
    op.drop_table('fitness_programs')
    # ### end Alembic commands ###
