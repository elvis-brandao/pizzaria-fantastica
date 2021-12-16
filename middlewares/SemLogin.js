module.exports = (req, res) => {
    if(req.session.usuario != undefined){
        return res.redirect('/adm/pizzas/create');
    }
    next();
}