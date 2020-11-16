package recipe.jpa;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Collection;


@Entity
@Table(name = "Recipe")
public class Recipe {
    @Id
    @GeneratedValue
    @Column(name = "id", nullable=false)
    private Long id;

    @NotNull
    @Column(name = "title", nullable = false)
    private String title;

    @NotNull
    @Column(name = "ingredients", nullable = false)
    private String ingredients;

    @NotNull
    @Column(name = "method", nullable = false)
    private String method;

    @NotNull
    @Column(name = "image")
    private String image;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "id_recipe", fetch = FetchType.EAGER)
    private Collection<Comment> comments;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getIngredients() {
        return ingredients;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Collection<Comment> getComments() {
        return comments;
    }

    public void setComments(Collection<Comment> comments) {
        this.comments = comments;
    }

}
