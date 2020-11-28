package recipe.service;

import recipe.dao.UserDao;
import recipe.jpa.User;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;

import static javax.ws.rs.core.Response.Status.UNAUTHORIZED;

import java.util.logging.Logger;

@Stateless
@Path("users")

public class UserService {

    private static final Logger logger = Logger.getLogger("service::UserService");

//    @Inject
//    private KeyGenerator keyGenerator;
//
//    @PersistenceContext
//    private EntityManager em;


    @Inject
    private UserDao userDao;

    public UserService() {
    }

    @POST
    @Path("/login")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response authenticateUser(User payload) {

        try {
            logger.info("#### login/payload : " + payload.getLogin() + payload.getPassword());

            User user = userDao.findUserByLoginPassword(payload);

            if (user == null) {
                logger.info("user === null" );
                throw new SecurityException("Invalid user/password");
            }

            // Issue a token for the user
//            String token = issueToken(login);

            // Return the token on the response
//            return Response.ok().header(AUTHORIZATION, "Bearer " + token).build();
            return Response.ok().build();
        } catch (Exception e) {
            return Response.status(UNAUTHORIZED).build();
        }
    }

//    private void authenticate(String login, String password) throws Exception {
//        TypedQuery<User> query = em.createNamedQuery(User.FIND_BY_LOGIN_PASSWORD, User.class);
//        query.setParameter("login", login);
//        query.setParameter("password", PasswordUtils.digestPassword(password));
//        User user = query.getSingleResult();
//
//        if (user == null)
//            throw new SecurityException("Invalid user/password");
//    }
//
//    private String issueToken(String login) {
//        Key key = keyGenerator.generateKey();
//        String jwtToken = Jwts.builder()
//                .setSubject(login)
//                .setIssuer(uriInfo.getAbsolutePath().toString())
//                .setIssuedAt(new Date())
//                .setExpiration(toDate(LocalDateTime.now().plusMinutes(15L)))
//                .signWith(SignatureAlgorithm.HS512, key)
//                .compact();
//        logger.info("#### generating token for a key : " + jwtToken + " - " + key);
//        return jwtToken;
//
//    }


//
//    @POST
//    public Response create(User user) {
//        em.persist(user);
//        return Response.created(uriInfo.getAbsolutePathBuilder().path(user.getId()).build()).build();
//    }
//
//    @GET
//    @Path("/{id}")
//    public Response findById(@PathParam("id") String id) {
//        User user = em.find(User.class, id);
//
//        if (user == null)
//            return Response.status(NOT_FOUND).build();
//
//        return Response.ok(user).build();
//    }
//
//    @GET
//    public Response findAllUsers() {
//        TypedQuery<User> query = em.createNamedQuery(User.FIND_ALL, User.class);
//        List<User> allUsers = query.getResultList();
//
//        if (allUsers == null)
//            return Response.status(NOT_FOUND).build();
//
//        return Response.ok(allUsers).build();
//    }
//
//    @DELETE
//    @Path("/{id}")
//    public Response remove(@PathParam("id") String id) {
//        em.remove(em.getReference(User.class, id));
//        return Response.noContent().build();
//    }
//
//    // ======================================
//    // =          Private methods           =
//    // ======================================
//
//    private Date toDate(LocalDateTime localDateTime) {
//        return Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());
//    }
}
