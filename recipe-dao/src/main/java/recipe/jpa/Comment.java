package recipe.jpa;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Entity
@Table(name = "Comment")
public class Comment implements Serializable {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @NotNull
    @Column(name = "content", nullable = false)
    private String content;

    @NotNull
    @Column(name = "id_recipe", nullable = false)
    private String id_recipe;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getId_recipe() {
        return id_recipe;
    }

    public void setId_recipe(String id_recipe) {
        this.id_recipe = id_recipe;
    }


}
