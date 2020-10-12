package travelpack;

import travelpack.jpa.Travel;
import travelpack.dao.TravelDao;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.logging.Logger;
import java.util.List;

@Path("/travels")
public class TravleService {
    private static final Logger LOGGER = Logger.getLogger(TravleService.class.getName());


    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Travel> getTravels() {
// uzupełnić TravelDao - jedna tabela to jedno entity - nazwa klasy = nazwa tabeli
//        pobrać liste wszystkich
        return;
    }


}
