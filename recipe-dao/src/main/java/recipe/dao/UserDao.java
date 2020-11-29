package recipe.dao;

import recipe.jpa.Recipe;
import recipe.jpa.User;
import recipe.utils.PasswordUtils;

import javax.ejb.Stateless;
import javax.persistence.*;
import javax.persistence.criteria.*;
import java.util.logging.Logger;

@Stateless
public class UserDao extends AbstractDao {
    private Logger logger = Logger.getLogger("dao::UserDao");

    public UserDao() {
        logger.info("UserDao created");
    }

    @Override
    protected Class<User> getType() {
        return User.class;
    }

    public User findUserByLoginPassword(User payload) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<User> cq = cb.createQuery(User.class);
        Root<User> u = cq.from(User.class);

        String encodedPassword = PasswordUtils.encodePassword(payload.getPassword());
//        logger.info("encodedPassword: " + encodedPassword);
        Predicate correctLogin = cb.equal(u.get("login"), payload.getLogin());
        Predicate correctPassword = cb.equal(u.get("password"), encodedPassword);

        cq.select(u).where(cb.and(correctLogin, correctPassword));

        User user = null;
        try {
            user = entityManager.createQuery(cq).getSingleResult();
        } catch (NoResultException nre) {

        }
        return user;

    }
}


