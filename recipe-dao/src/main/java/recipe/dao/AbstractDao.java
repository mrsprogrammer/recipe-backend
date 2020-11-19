package recipe.dao;

import javax.naming.NamingException;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import java.io.Serializable;
import java.sql.SQLException;
import java.util.List;

public abstract class AbstractDao<T> {

    @PersistenceContext(unitName = "Recipe")
    protected EntityManager entityManager;

    /**
     * Metoda do zdefiniowania w każdej klasie potomnej - zwraca typ danej klasy JPA dla fasady np. News.class
     */
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


//    protected abstract Class<T> getType();
//
//
//    public void create(T object) {
//        entityManager.persist(object);
//    }
//
//    public T merge(T object) {
//        return entityManager.merge(object);
//    }
//
//    public void remove(Object id) {
//        T o = entityManager.find(getType(), id);
//
//        entityManager.remove(o);
//    }
//
//    public List<T> all() {
//        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
//        CriteriaQuery<T> cq = cb.createQuery(getType());
//
//        cq.select(cq.from(getType()));
//        return entityManager.createQuery(cq).getResultList();
//    }
//    public List<T> all() {
//        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
//        CriteriaQuery<T> cq = cb.createQuery(getType());
//
//        cq.select(cq.from(getType()));
//        return entityManager.createQuery(cq).getResultList();
//    }


}

