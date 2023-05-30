package recipe.dao;

import recipe.jpa.Recipe;

import javax.ejb.Stateless;
import javax.persistence.TypedQuery;
import java.util.List;
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

    public List<Recipe> findRecipesByCategoryName(String categoryName) {
        TypedQuery<Recipe> query =
                entityManager.createNamedQuery("Recipe.findRecipesByCategoryName", Recipe.class);
        query.setParameter("categoryName", categoryName);
        return query.getResultList();
    }


}
