package recipe;

import recipe.dao.RecipeDao;
import recipe.jpa.Recipe;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;
import java.util.logging.Logger;

@Stateless
@Path("recipes")
public class RecipeService {
    private static final Logger logger = Logger.getLogger("RecipeService");

    @Inject
    private RecipeDao memberDao;

    public RecipeService() {
    }

    @Path("/")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Recipe> getCollection() {
        logger.info("/recipes getCollection");
        return memberDao.findAll();
    }

    @Path("/{id}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Object getOne(@PathParam("id") Long id) {
        logger.info("/recipes " + id  +  " getCollection");
        return memberDao.findOne(id);
    }
}
