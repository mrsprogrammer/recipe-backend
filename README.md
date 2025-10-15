# Backend Project

Goal: Create RESTful Web Services using the Java EE specification, JAX-RS.

### Assumptions:

- Authorization and authentication
- Generating JWT
- Reading recipe data divided into categories
- Reading comments from the database related to recipes
- Saving new recipes to the database

### Environment Requirements:

- Java 11 configuration – JDK 11
- Installation and configuration of the Wildfly application server
- Installation of the MySQL database server
- Installation of Apache Maven
- Configuration of mysql-connector (mysql-connector-java-8.0.21.jar) on Wildfly

### Technologies Used:

• Java 11\
• RESTEasy\
• Maven\
• JWTs\
• Apache Maven Deploy Plugin\
• Wildfly 20\
• Hibernate\
• MySQL

### RUNNING THE APPLICATION:

Wildfly Configuration - settings in the `standalone.xml` configuration file:

1. Setting up the image server. Specify the path to the `images` directory (directory with uploaded images: `/misc/images`):

```
        <subsystem xmlns="urn:jboss:domain:undertow:11.0" default-server="default-server" {...}>
            <buffer-cache name="default"/>
            <server name="default-server">
        {...}
                <host name="default-host" alias="localhost">
                    {...}
                    <location name="/img" handler="images"/>
                </host>
            </server>
        {...}
            <handlers>
        {...}
                <file name="images" path="..." directory-listing="true"/>
            </handlers>
        </subsystem>
```

2. MySQL database configuration (database: `/database/schema.sql`), `jndi-name="java:jboss/datasources/Recipe"`:

```
        <datasource jndi-name="java:jboss/datasources/Recipe" pool-name="Recipe">
            <connection-url>jdbc:mysql://localhost:3306/recipe</connection-url>
            <driver-class>com.mysql.cj.jdbc.Driver</driver-class>
            <driver>mysql</driver>
            <security>
                <user-name>root</user-name>
                <password>root</password>
            </security>
            <validation>
                <valid-connection-checker class-name="org.jboss.jca.adapters.jdbc.extensions.mysql.MySQLValidConnectionChecker"/>
                <background-validation>true</background-validation>
                <exception-sorter class-name="org.jboss.jca.adapters.jdbc.extensions.mysql.MySQLExceptionSorter"/>
            </validation>
        </datasource>
```

In the Wildfly console:

- Deploy `recipe.ear` (file uploaded: `/bin/recipe.ear`)
- Verify the database connection
- Application available at: `localhost:8080/recipes/`
