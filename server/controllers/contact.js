/*
Centennial College
Date:10/01/2021  
Eduardo Escobar #301081088
COMP:229 SEC:15
PROFESSOR: Aderson Oliveira
*/
 

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken')

let Contact = require('../models/contact');

module.exports.displayContactList = (req, res, next) =>{
    Contact.find((err, contactList) =>{
        if (err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(ContactList)

            res.render('contact/list', {
                title: 'Business Contact', ContactList: contactList,
                displayName: req.user ? req.user.displayName : ''});
        }
    });
}


//Display Page
module.exports.displayAddPage = (req, res, next) =>{
    res.render('contact/add', { title: 'Add Contact',
    displayName: req.user ? req.user.displayName : ''});
}

//Process to add

module.exports.processAddPage = (req, res, next) =>{
    let newContact = Contact({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    Contact.create(newContact, (err, Contact) => {
        if (err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // Process to refresh contact list
            res.redirect('/contact-list');
        }
    });
}

//Process to display edit

module.exports.displayEditPage = (req, res, next) =>{
    let id = req.params.id;

    Contact.findById(id, (err, contactToEdit) => {
        if (err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('contact/edit', {
                title: 'Edit Contact', contact: contactToEdit,
                displayName: req.user ? req.user.displayName : ''});
        }
    });
}

//Process To Edit 

module.exports.processEditPage = (req, res, next) =>{
    let id = req.params.id;

    let updatedContact = Contact({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    Contact.updateOne({_id: id}, updatedContact, (err) => {
        if (err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/contact-list');
        }
    });
}


//Process to Delete

module.exports.performDelete = (req, res, next) =>{
    let id = req.params.id;

    Contact.remove({_id: id}, (err) => {
        if (err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //Refresh the contact list
            res.redirect('/contact-list');
        }
    });
}