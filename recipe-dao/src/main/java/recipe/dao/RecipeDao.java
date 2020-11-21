package recipe.dao;

import recipe.jpa.Recipe;

import javax.ejb.Stateless;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
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
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Recipe> cq = cb.createQuery(Recipe.class);

        Root<Recipe> r = cq.from(Recipe.class);
        cq.select(r);
        cq.where(cb.equal(r.get("categoryName"), categoryName));

        return entityManager.createQuery(cq).getResultList();
    }


}
