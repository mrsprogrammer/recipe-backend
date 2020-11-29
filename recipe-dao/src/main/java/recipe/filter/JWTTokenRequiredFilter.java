package recipe.filter;

import io.jsonwebtoken.Jwts;

import javax.annotation.Priority;

import recipe.utils.KeyGenerator;
import recipe.utils.SecurityUtils;

import javax.ws.rs.NotAuthorizedException;
import javax.ws.rs.Priorities;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.Provider;
import java.io.IOException;
import java.security.Key;
import java.util.logging.Logger;

@Provider
@JWTTokenRequired
@Priority(Priorities.AUTHENTICATION)
public class JWTTokenRequiredFilter implements ContainerRequestFilter {
    private static final Logger logger = Logger.getLogger("JWTTokenRequiredFilter");

    @Override
    public void filter(ContainerRequestContext requestContext) throws NotAuthorizedException {

        // Get the HTTP Authorization header from the request
        String token = requestContext.getHeaderString(HttpHeaders.AUTHORIZATION);
        logger.info("#### token : " + token);

        // Check if the HTTP Authorization header is present
        if (token == null) {
            logger.severe("#### invalid authorizationHeader : ");
            throw new NotAuthorizedException("Authorization header must be provided");
        }

        try {
            // Validate the token
            Key key = SecurityUtils.generateKey();
            Jwts.parser().setSigningKey(key).parseClaimsJws(token);
            logger.info("#### valid token : " + token);

        } catch (Exception e) {
            logger.severe("#### invalid token : " + token);
            requestContext.abortWith(Response.status(Response.Status.UNAUTHORIZED).build());
        }
    }
}