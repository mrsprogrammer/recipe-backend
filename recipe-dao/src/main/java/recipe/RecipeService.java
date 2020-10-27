package recipe;

import recipe.dao.RecipeDao;
import recipe.jpa.Recipe;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
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


    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Recipe> list() {

        return memberDao.findAll();
    }
}
