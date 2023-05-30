WYMAGANIA:

- instalacja i konfiguracja serwera aplikacji Wildfly
- instalacja serwera bazy danych MySQL
- konfiguracja driver MySLQ (mysql-connector-java-8.0.21.jar) na Wildfly (plik przesłany: /server/module.xml) 


KONFIGURACJA ŚRODOWISKA:

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

URUCHOMIENIE:

W konsoli Widlfly:
- deploy recipe.ear (plik przesłany: /bin/recipe.ear) 
- sprawdzenie połączenia z bazą danych
- aplikacja dostępna: localhost:8080/recipes/


