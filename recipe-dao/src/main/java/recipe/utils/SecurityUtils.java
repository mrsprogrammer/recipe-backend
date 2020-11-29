package recipe.utils;

import io.jsonwebtoken.SignatureAlgorithm;

import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;
import java.security.Key;
import java.security.MessageDigest;
import java.util.Base64;
import java.util.logging.Logger;

public class SecurityUtils {
    private static final Logger logger = Logger.getLogger("SecurityUtils");

    static final String SECRET_KEY = "super-secret-recipe-key";

    public static String encodePassword(String password) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            md.update(password.getBytes("UTF-8"));
            byte[] passwordDigest = md.digest();
            return new String(Base64.getEncoder().encode(passwordDigest));
        } catch (Exception e) {
            throw new RuntimeException("Exception encoding password", e);
        }
    }

    public static Key generateKey(){
        SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;
        byte[] apiKeySecretBytes = DatatypeConverter.parseBase64Binary(SECRET_KEY);
        Key key = new SecretKeySpec(apiKeySecretBytes, signatureAlgorithm.getJcaName());
        logger.info("generateKey key: " + key +" ,generateKey key.getEncoded: " + key.getEncoded() + " ,generateKey key.hashCode: " + key.hashCode() + " ,generateKey key.toString: " + key.toString() );
        return key;
    }


    public static String encode(byte[] bytes) {
        return Base64.getUrlEncoder().withoutPadding().encodeToString(bytes);
    }

    public static String decode(String encodedString) {
        return new String(Base64.getUrlDecoder().decode(encodedString));
    }
}