package recipe.dao;


import recipe.jpa.User;

import javax.ejb.Stateless;
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
}
