module.exports = {
    getAll: (req, res) => {
      const db = req.app.get('db');
      console.log(req.session.user)
  
      db.get_all_posts()
        .then(posts => {
          res.status(200).send(posts);
        })
        .catch(err => {
          res.status(500).send(err);
        });
    },
    addPost: (req, res) => {
      const db = req.app.get('db');
      const { user_id } = req.session.user;
      const { stars, post } = req.body;
      console.log(req.body)
  
      db.create_post({stars, post, user_id})
        .then(posts => {
            console.log(posts)
          res.status(200).send(posts);
        })
        .catch(err => {
          res.status(500).send(err);
        });
    },
  
    deletePost: (req, res) => {
      const db = req.app.get('db');
      const { id } = req.params;
  
      db.delete_post([id])
        .then(posts => {
          res.status(200).send(posts);
        })
        .catch(err => {
          res.status(500).send(err);
        });
    },
  
    updatePost: (req, res) => {
      const db = req.app.get('db');
      const { id } = req.params;
      const { posts } = req.body;
  
      db.update_posts([id, posts])
        .then(posts => {
          res.status(200).send(posts);
        })
        .catch(err => {
          res.status(500).send(err);
        });
    }
  };
  