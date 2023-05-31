# Projekt back-end

Cel: stworzenie RESTful Web services z zastosowaniem specyfikacji JAVA EE, JAX-RS

### Założenia:

- autoryzacja i uwierzytelnianie
- generowanie JWT
- odczytywanie danych przepisów kulinarnych, podzielonych na kategorie
- odczytywanie komentarzy z bazy będących w relacji z przepisem
- zapisywanie nowego przepsu do bazy danych

### Wymagania środowiskowe:

- konfiguracja środowiska Java 11 – JDK 11
- instalacja i konfiguracja serwera aplikacji Wildfly
- instalacja serwera bazy danych MySQL
- instalacja Apache Maven
- konfiguracja mysql-connector (mysql-connector-java-8.0.21.jar) na Wildfly

### Użyte technologie:

• Java 11\
• RESTEasy\
• Maven\
• JWTs\
• Apache Maven Deploy Plugin\
• Wildfly 20\
• Hibernate\
• MySQL

### URUCHOMIENIE:

Konfiguracja Wildfly - ustawienia w pliku konfiguracyjnym standalone.xml:

1. Ustawienie serwera obrazków. Ustawienie ścieżki do katalogu images (katalog z obrazkami przesłany: /misc/images)

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

2. Konfiguracja bazy danych MySQL (baza danych: /database/schema.sql), jndi-name="java:jboss/datasources/Recipe":

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

W konsoli Widlfly:

- deploy recipe.ear (plik przesłany: /bin/recipe.ear)
- sprawdzenie połączenia z bazą danych
- aplikacja dostępna: localhost:8080/recipes/
