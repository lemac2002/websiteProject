


/**
 * @api {get} homepage Home
 */
exports.home = async (req, res) => {
    res.render('index',{title: 'Vegan Cooking - homepage'});
}