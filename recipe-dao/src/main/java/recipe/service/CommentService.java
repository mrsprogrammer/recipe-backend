package recipe.service;

import recipe.dao.CommentDao;
import recipe.jpa.Comment;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.logging.Logger;

@Stateless
@Path("comments")
public class CommentService {
    private static final Logger logger = Logger.getLogger("Comment::CommentService");


    @Inject
    private CommentDao commentDao;

    public CommentService() {
    }


    @Path("/create")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response createComment(Comment newComment) {
        logger.info("newComment: " + newComment);

         commentDao.create(newComment);
         return Response.ok().build();
    }


}
