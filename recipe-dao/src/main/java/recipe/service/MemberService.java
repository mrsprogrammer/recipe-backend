package recipe.service;

import recipe.dao.MemberDao;
import recipe.jpa.Member;

import javax.ejb.EJB;
import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.logging.Logger;
import java.util.List;

@Stateless
@Path("members")
public class MemberService {
    private static final Logger logger = Logger.getLogger("Member::MemberService");

//    @EJB
    @Inject
    private MemberDao memberDao;

    public MemberService() {
    }


    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Member> list() {
        logger.info("memberDao.findAll()");
        logger.info("memberDao: " + memberDao);

        return memberDao.findAll();
    }


}
