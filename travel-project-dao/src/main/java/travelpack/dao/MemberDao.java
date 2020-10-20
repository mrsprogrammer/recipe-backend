package travelpack.dao;

import travelpack.jpa.Member;

import javax.ejb.Stateless;
import java.util.logging.Logger;


@Stateless
public class MemberDao extends AbstractDao {

    private Logger logger = Logger.getLogger("dao::MemberDao");


    public MemberDao() {
        logger.info("MemberDao created");
    }

    @Override
    protected Class<Member> getType() {
        return Member.class;
    }


}
