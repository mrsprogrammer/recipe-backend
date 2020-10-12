package travelpack.dao;

import travelpack.jpa.Travel;
import javax.ejb.Stateless;
import java.util.logging.Logger;


@Stateless
public class TravelDao extends AbstractDao {

    public static final int DEFAULT_COUNT = 20;

    private Logger logger = Logger.getLogger("Travel::TravelDao");


    @Override
    protected Class<Travel> getType() {
        return Travel.class;
    }


}
