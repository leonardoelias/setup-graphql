import * as Sequelize from 'sequelize';
import {ModelsInterface} from '../interfaces/ModelsInterface';
import {BaseModelInterface} from '../interfaces/BaseModelInterface';

export interface PostAttributes {
    id?: number;
    title?: string;
    content?: string;
    author?: number;
    createAt?: String;
    updateAt?: string;
};

export interface PostInstance extends Sequelize.Instance < PostAttributes > {}

export interface PostModel extends BaseModelInterface,
Sequelize.Model < PostInstance,
PostAttributes > {}

export default(sequelize : Sequelize.Sequelize, DataTypes : Sequelize.DataTypes) : PostModel => {
    const Post : PostModel = sequelize.define('Post', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        photo: {
            type: DataTypes.BLOB({length: 'long'}),
            allowNull: false
        }
    }, {tableName: 'posts'});

    Post.associate = (models : ModelsInterface) : void => {
        Post.belongsTo(models.User, {
            foreignKey: {
                allowNull: false,
                field: 'author',
                name: 'author'
            }
        })
    };

    return Post;
}