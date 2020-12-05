package recipe.service;

import recipe.dao.RecipeDao;
import recipe.filter.JWTTokenRequired;
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
    private static final Logger logger = Logger.getLogger("service::RecipeService");

    @Inject
    private RecipeDao recipeDao;

    public RecipeService() {
    }

    @Path("/")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
//    @JWTTokenRequired
    public List<Recipe> getAll() {
        return recipeDao.findAll();
    }

    @Path("/cakes")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Recipe> getCakes() {
        return recipeDao.findRecipesByCategoryName("cakes");
    }

    @Path("/salads")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Recipe> getSalads() {
        return recipeDao.findRecipesByCategoryName("salads");
    }

    @Path("/soups")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Recipe> getSoups() {
        return recipeDao.findRecipesByCategoryName("soups");
    }

    @Path("/{id}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Object getOne(@PathParam("id") Long id) {
        return recipeDao.findOne(id);
    }
}
