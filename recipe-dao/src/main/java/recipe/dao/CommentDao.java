package recipe.dao;

import recipe.jpa.Comment;

import java.util.logging.Logger;

public class CommentDao  extends AbstractDao<Comment>{
    private Logger logger = Logger.getLogger("dao::CommentDao");
    public CommentDao() {
        logger.info("CommentDao created");
    }

    @Override
    protected Class<Comment> getType() {
        return Comment.class;
    }
}
