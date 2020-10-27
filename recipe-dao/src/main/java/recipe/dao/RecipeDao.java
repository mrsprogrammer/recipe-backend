package recipe.dao;

import recipe.jpa.Recipe;

import javax.ejb.Stateless;
import java.util.logging.Logger;

@Stateless
public class RecipeDao extends AbstractDao {
    private Logger logger = Logger.getLogger("dao::RecipeDao");


    public RecipeDao() {
        logger.info("RecipeDao created");
    }

    @Override
    protected Class<Recipe> getType() {
        return Recipe.class;
    }

}
