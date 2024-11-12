package TPFinal.APIDireccion.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ControllerUbicacion {
    @GetMapping("/welcome")
    public String getWelcome() {
        return "ubicacion";
    }
}
