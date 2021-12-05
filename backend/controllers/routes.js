const express = require('express');
const router = express.Router();
const todo = require('../models/todo');

router.post('/create', async (req, res) => {
    const mytodo = req.body.mytodo;

    const Todonew = new todo({
        mytodo,
    });
    try {
      const newSave = await Todonew.save();
      res.send(Todonew);
    } catch (e) {
      console.log(e);
    }
});

router.get("/todos", (req, res) => {
    var todos;
    todo.find((err, data) => {
        if (err) {
            console.log(err);
        }
        if (data) {
            todos = data;
        }
        res.send(todos);
    });
});

router.put('/update/:id', (req, res, next) => {
    todo.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        todo.findOne({_id: req.params.id}).then((todo) => {
            res.send(todo);
        });
    });
});

router.delete('/delete/:id', (req, res, next) => {
    todo.findByIdAndRemove({_id: req.params.id}).then((todo) => {
        res.send(todo);
    })
});

module.exports = router;