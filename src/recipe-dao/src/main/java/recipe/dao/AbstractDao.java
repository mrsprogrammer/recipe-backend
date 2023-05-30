package recipe.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import java.util.List;

public abstract class AbstractDao<T> {

    @PersistenceContext(unitName = "Recipe")
    protected EntityManager entityManager;

    protected abstract Class<T> getType();

    public List<T> findAll() {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<T> cq = cb.createQuery(getType());

        cq.select(cq.from(getType()));
        return entityManager.createQuery(cq).getResultList();
    }

    public Object findOne(Long id) {
        return entityManager.find(getType(), id);
    }


    public void create(T entity) {
        entityManager.persist(entity);
    }

    public void update(T entity) {
        entityManager.merge(entity);
    }

    public void delete(T entity) {
        entityManager.remove(entity);
    }

}

