package recipe.service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.json.JSONObject;
import recipe.dao.UserDao;
import recipe.jpa.User;
import recipe.utils.SecurityUtils;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import static javax.ws.rs.core.Response.Status.UNAUTHORIZED;
import static javax.ws.rs.core.HttpHeaders.AUTHORIZATION;

import java.security.Key;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.logging.Logger;

@Stateless
@Path("users")
public class UserService {
    private static final Logger logger = Logger.getLogger("service::UserService");

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
            JSONObject userPayload = authenticate(payload);
            String token = createJWTToken(userPayload);

            JSONObject json = new JSONObject().put("token", token);
            return Response.ok().header(AUTHORIZATION, "Bearer " + token).entity(json.toString()).build();
        } catch (Exception e) {
            return Response.status(UNAUTHORIZED).build();
        }
    }

    private JSONObject authenticate(User payload) throws SecurityException {
        User user = userDao.findUserByLoginPassword(payload);

        if (user == null) {
            logger.info("Invalid user or password: user == null");
            throw new SecurityException("Invalid user or password");
        }
        JSONObject userPayload = new JSONObject().put("id", user.getId()).put("role", user.getRole());
        return userPayload;
    }

    private String createJWTToken(JSONObject userPayload) {
        Integer sub = userPayload.getInt("id");
        String aud = userPayload.getString("role");
        // token expires after 24 hours
        Key key = SecurityUtils.generateKey();
        String token = Jwts.builder()
                .setSubject(sub.toString())
                .setAudience(aud)
                .setExpiration(toDate(LocalDateTime.now().plusHours(24L)))
                .signWith(SignatureAlgorithm.HS512, key)
                .compact();
        logger.info("Generating token for a key : " + token);
        return token;
    }

    private Date toDate(LocalDateTime localDateTime) {
        return Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());
    }


    @POST
    @Path("/register")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response create(User payload) {
        User user = userDao.createUser(payload);
        JSONObject json = new JSONObject().put("id", user.getId());
        return Response.ok().entity(json.toString()).build();
    }

}
