package travelpack.dao;

import travelpack.jpa.Member;

import javax.ejb.Stateless;
import java.util.List;
import java.util.logging.Logger;


@Stateless
public class MemberDao extends AbstractDao {

    private Logger logger = Logger.getLogger("Member::MemberDao");


    public MemberDao() {
        logger.info("MemberDao created");
    }

    @Override
    protected Class<Member> getType() {
        return Member.class;
    }


//    public List<TravelDao> listTravels() {
//        try {
//            return findAll();
//        } catch (Exception e) {
//            logger.warning("listTravels, error while executing query: " + e);
//        }
//        return null;
//    }
}
