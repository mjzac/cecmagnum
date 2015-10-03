/**
 * ListController
 *
 * @description :: Server-side logic for managing Lists
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res) {
		List.find({},function(err, listOfItems){
			if(err){
				var listOfItems = [];
			}
			return res.view({items: listOfItems});
		});

	},
	addItem: function(req, res) {
		var title = req.param('title');
		var description = req.param('description');
		var obj = {};
		obj.Title = title;
		obj.Description = description;
		obj.Status  = 'TODO';
		List.create(obj, function(err, createdItem) {
			if (err || !createdItem){
				return res.send(500);
			}else {
				return res.redirect('/');
			}
		});
	},
	editItem: function(req, res) {
		var itemId = req.param('id');
		List.find({id: itemId}, function(err, foundItem){
			if(err || foundItem.length === 0){
				return res.notFound();
			}else{
				var listItem = foundItem[0];
				return res.view({item: listItem});
			}

		});
	},

	updateItem: function(req, res) {
		var id = req.param('id');
		var title = req.param('title');
		var description = req.param('description');
		var completed = req.param('completed');
		var obj = {};
		obj.Title = title;
		obj.Description = description;
		obj.Status = completed === 'true' ? 'COMPLETED': 'TODO';
		List.update({id: id}, obj, function(err, updatedItem){
			if(err || updatedItem.length === 0) {
				return res.send(500);
			}else {
				return res.redirect('/');
			}
		});
	},
	deleteItem: function(req, res) {
		var id = req.param('id');
		List.destroy({id: id}, function(err, deletedItem) {
			return res.redirect('/');
		});
	}
};
