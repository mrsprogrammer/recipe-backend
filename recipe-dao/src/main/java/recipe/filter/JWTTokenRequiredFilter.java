package recipe.filter;

import recipe.utils.SecurityUtils;

import io.jsonwebtoken.Jwts;
import javax.annotation.Priority;
import javax.ws.rs.NotAuthorizedException;
import javax.ws.rs.Priorities;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.Provider;
import java.security.Key;
import java.util.logging.Logger;

@Provider
@JWTTokenRequired
@Priority(Priorities.AUTHENTICATION)
public class JWTTokenRequiredFilter implements ContainerRequestFilter {
    private static final Logger logger = Logger.getLogger("JWTTokenRequiredFilter");

    @Override
    public void filter(ContainerRequestContext requestContext) throws NotAuthorizedException {
        String token = requestContext.getHeaderString(HttpHeaders.AUTHORIZATION);

        // Check if the HTTP Authorization header is present
        if (token == null) {
            logger.info("Authorization header must be provided");
            throw new NotAuthorizedException("Authorization header must be provided");
        }

        try {
            Key key = SecurityUtils.generateKey();
            Jwts.parser().setSigningKey(key).parseClaimsJws(token);
            logger.info("Valid token : " + token);

        } catch (Exception e) {
            logger.severe("Invalid token : " + token);
            requestContext.abortWith(Response.status(Response.Status.UNAUTHORIZED).build());
        }
    }
}