package recipe.dao;

import recipe.jpa.Comment;

import java.util.logging.Logger;

public class CommentDao extends AbstractDao<Comment> {
    private Logger logger = Logger.getLogger("dao::CommentDao");

    public CommentDao() {
        logger.info("CommentDao created");
    }

    @Override
    protected Class<Comment> getType() {
        return Comment.class;
    }

    public Comment createComment(Comment payload) {
        Comment comment = new Comment();
        comment.setContent(payload.getContent());
        comment.setId_recipe(payload.getId_recipe());
        create(comment);
        return comment;
    }


}
