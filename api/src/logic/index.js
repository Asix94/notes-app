'use strict';

const { User, Note } = require('../model/index');

module.exports = {

    listuser(){
        return User.find();
    },

    listnote(){
        return Note.find();
    },

    retrieveuser(id){
        return User.findById(id);
    },

    retrievenote(id){
        return Note.findById(id);
    },

    createuser(name,surname,alias,password){
        return User.create({name,surname,alias,password});
    },

    createnote(id_user,title,description){
        return Note.create({id_user,title,description});
    },

    updateuser(id,name,surname,alias,password){
        return User.findByIdAndUpdate({_id:id},{$set:{name,surname,alias,password}})
    },

    updatenote(id,id_user,title,description){
        return Note.findByIdAndUpdate({_id:id},{$set:{id_user,title,description}});
    },

    deleteuser(id){
        return User.findByIdAndRemove({_id:id});
    },

    deletenote(id){
        return Note.findByIdAndRemove({_id:id});
    }
}